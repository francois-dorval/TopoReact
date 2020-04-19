import Secteurs from '../assets/secteurs/secteurs';
import _ from 'lodash'
import { logger } from 'react-native-logs';

let log = logger.createLogger({ severity: 'info'});

function SecteurData() {
}


function getSecteur(obj,  value) {
    if (!obj){
        return null;
    }
    if (obj.secteur.id=== value) {
     //   log.debug("getSecteur "+value+" found "+obj.secteur.name);
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
    log.debug("getSecteurs "+obj.secteur.id);
    let result=[]
    if (!obj){
        return null;
    }
    if (obj.secteur) {
          log.debug("getSecteurs  found "+obj.secteur.name);
        result.push( {id:obj.secteur.id, name:obj.secteur.name, level:obj.secteur.level});
    }

    let subs = obj.secteur.subsecteurs;
    log.debug("getSecteurs  subs "+subs.length);

    if (subs && subs.length){
        log.debug("getSecteurs  suuuuuuuubs "+subs.length);

        for (var i=0;i<subs.length;i++){
            result=result.concat( getSecteurs(subs[i]));
        }
    }
    return result;
}


SecteurData.getData=function(id){
   // log.debug('getData::', id);
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