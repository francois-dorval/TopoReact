import Secteurs from '../assets/secteurs/secteurs';
import _ from 'lodash'
import { logger } from 'react-native-logs';

let log = logger.createLogger();

function SecteurData() {
}


function loog(data){

}
function getSecteur(obj,  value) {
    //loog("getSecteur "+obj.secteur.id);
    if (!obj){
        return null;
    }
    if (obj.secteur.id=== value) {
     //   loog("getSecteur "+value+" found "+obj.secteur.name);
        return obj.secteur;
    }
    let subs = obj.secteur.subsecteurs;
    if (subs && subs.length){
        for (var i=0;i<subs.length;i++){
            let res = getSecteur(subs[i], value);
            if (res){
                return res;
            }
        }
    }
    return null;
}

function getSecteurs(obj) {
    loog("getSecteurs "+obj.secteur.id);
    let result=[]
    if (!obj){
        return null;
    }
    if (obj.secteur) {
          loog("getSecteurs  found "+obj.secteur.name);
        result.push( {id:obj.secteur.id, name:obj.secteur.name});
    }

    let subs = obj.secteur.subsecteurs;
    loog("getSecteurs  subs "+subs.length);

    if (subs && subs.length){
        loog("getSecteurs  suuuuuuuubs "+subs.length);

        for (var i=0;i<subs.length;i++){
            result=result.concat( getSecteurs(subs[i]));
        }
    }
    return result;
}


SecteurData.getData=function(id){
   // loog('getData::', id);
    if (!id){
        log.debug('getData no id::'+Secteurs.secteur.name);
        return Secteurs.secteur;
    }
    let data = getSecteur(Secteurs,  id);
    if (!data){
        log.error("no data found for "+id)
    }
    return data;
};


SecteurData.getSecteursData=function(){
    return getSecteurs(Secteurs)
};
module.exports=SecteurData;