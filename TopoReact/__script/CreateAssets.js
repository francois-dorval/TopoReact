const fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    fsExtra = require('fs-extra'),
    DownloadData = require('./DownloadData');

const log = require('simple-node-logger').createSimpleLogger();
log.setLevel('info');

const IMAGE_DIR = "./assets/images/secteurs/";

function parseRoutes(filename) {
    try {
        return JSON.parse(fs.readFileSync(filename, 'utf8'));
    } catch (e) {
        // console.log("probleme parsing routes " + filename)
    }
}

function parseSecteur(filename) {
    try {
        return JSON.parse(fs.readFileSync(filename, 'utf8'));
    } catch (e) {
        //   console.log("probleme parsing secteur " + filename)
    }
}
//
//
// function cleanRoutes(arr){
//     _.map(arr, function (it) {
//         let newObj = {};
//         Object.keys(it).forEach((prop) => {
//             if (it[prop] !== ''&&it[prop] !== 0) { newObj[prop] = it[prop]; }
//         });
//         return newObj;
//     })
// }
/**
 * subsecteurs
 * @param filename
 * @returns {[]}
 */
function parseSubSecteurs(filename, level) {
    try {
        let result = []

        var res = fs.readdirSync(filename).map(function (child) {
            return dirTree(filename + '/' + child,level+1);
        });
        if (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i]) {
                    result.push(res[i])
                }
            }
        }
        return result;
    } catch (e) {
        console.log("probleme parsing secteur " + filename)
    }
}

/**
 * moche: on ne peut pas avoir de require dans du json donc on le remet après
 * @param string
 * @returns {*}
 */
function replaceRequirePattern(string) {
    function replaceAll(string, search, replacement) {
        return string.replace(new RegExp(search, 'g'), replacement);
    };
    let result = replaceAll(string, "\"BEGINREQUIREIMGTOREMOVE", "require ('../images/secteurs/");
    result = replaceAll(result, "ENDREQUIREIMGTOREMOVE\"", "')");
    return result;
}


/**
 * copie une image dans les assets
 * @param secteur
 * @param filename
 * @param id
 */
function manageImage(secteur, filePath, id, attributeName) {
    if (!attributeName) {
        attributeName = "img"
    }
    if (fs.existsSync(filePath)) {
        log.info("found " + filePath)
        let fileName = id + "_" + path.basename(filePath)
        fs.copyFile(filePath, IMAGE_DIR + fileName, (err) => {
            if (err) throw err;
        });
        secteur[attributeName] = 'BEGINREQUIREIMGTOREMOVE' + fileName + 'ENDREQUIREIMGTOREMOVE';
    }

}

/**
 * copie toutes les images dans les assets
 * @param secteur
 * @param path
 * @param id
 */
function manageImages(secteur, path, id) {
    manageImage(secteur, path + "/secteur.jpg", id)
    manageImage(secteur, path + "/secteur.png", id)
    manageImage(secteur, path + "/vignette.jpg", id, "vignette")
    manageImage(secteur, path + "/acces.png", id, "access_img")
    manageImage(secteur, path + "/acces.jpg", id, "access_img")


}


/**
 * le truc...
 * @param filename
 * @returns {{secteur: {}}|{}|null}
 */
function dirTree(filename, level) {
    var stats = fs.lstatSync(filename)

    if (stats.isDirectory()) {
        let secteur = {}
        let id = (Math.random() + 1).toString(36).substring(7);
        secteur.id = id;
        manageImages(secteur, filename, id)
        _.merge(secteur, parseSecteur(filename + '/' + "index.json"))
        if (secteur.routesData) {
            let routesData = DownloadData.get(secteur.routesData).rows
            secteur.routes = routesData;
        }
        if (!secteur.routes) {
            secteur.routes = parseRoutes(filename + '/' + "routes.json")
        }
        if (secteur.routes){
            secteur.routeNumber=secteur.routes.length;
        }
       // cleanRoutes(secteur.routes)
        secteur.subsecteurs = parseSubSecteurs(filename, level)
        secteur.level=level;
        return {secteur: secteur};

    } else {
        return null;
    }
    return secteur;
}


function printValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            printValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

if (module.parent == undefined) {
    fsExtra.emptyDirSync(IMAGE_DIR)
    let result = dirTree(process.argv[2],0)

    let resultString = JSON.stringify(result, null, 2);
    ////////////
    //console.log(printValues(result))
    ////////////
    resultString = replaceRequirePattern(resultString);


    let secteursAsJs = "const Secteurs =" + resultString + ";export default Secteurs;"

    fs.writeFile('./assets/secteurs/secteurs.js', secteursAsJs, function (err) {
        if (err) return console.log(err);

    });
}