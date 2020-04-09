const fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
 fsExtra = require('fs-extra')

const IMAGE_DIR="./assets/images/secteurs/"

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

/**
 * subsecteurs
 * @param filename
 * @returns {[]}
 */
function parseSubSecteurs(filename) {
    try {
        let result =[]

        var res = fs.readdirSync(filename).map(function (child) {
            return dirTree(filename + '/' + child);
        });
        if (res){
            for (var i=0;i<res.length;i++){
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
 * copie une image dans les assets
 * @param secteur
 * @param filename
 * @param id
 */
function manageImage(secteur, filePath, id) {
    if (fs.existsSync(filePath)) {
        let fileName=id+"_"+path.basename(filePath)
        fs.copyFile(filePath, IMAGE_DIR+fileName, (err) => {
            if (err) throw err;
        });
        secteur.img='require '+fileName
    }

}

/**
 * copie toutes les images dans les assets
 * @param secteur
 * @param path
 * @param id
 */
function manageImages(secteur, path, id) {
    manageImage(secteur, path + "/secteur.png", id)
    manageImage(secteur, path + "/secteur.jpg", id)
}


/**
 * le truc...
 * @param filename
 * @returns {{secteur: {}}|{}|null}
 */
function dirTree(filename) {
    var stats = fs.lstatSync(filename)

    if (stats.isDirectory()) {
        let secteur={}
        let id=(Math.random() + 1).toString(36).substring(7);
        secteur.id=id;
        manageImages(secteur, filename, id)
        _.merge(secteur, parseSecteur(filename + '/' + "index.json"))
        secteur.routes=parseRoutes(filename + '/' + "routes.json")
        secteur.subsecteurs=parseSubSecteurs(filename )

        return {secteur:secteur};

    } else {

        return null;
    }

    return secteur;
}

if (module.parent == undefined) {
    fsExtra.emptyDirSync(IMAGE_DIR)
    let result=dirTree(process.argv[2])

    let secteursAsJs="const Secteurs ="+JSON.stringify(result, null, 2)+";export default Secteurs;"

    fs.writeFile('./assets/secteurs/secteurs2.js', secteursAsJs, function (err) {
        if (err) return console.log(err);

    });
}