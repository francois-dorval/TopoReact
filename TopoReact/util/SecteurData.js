import Secteurs from '../assets/secteurs/secteurs';
import _ from 'lodash'

function SecteurData() {
}

function getSecteur(obj,  value) {
    console.log("getSecteur "+obj.secteur.id);
    if (!obj){
        return null;
    }
    if (obj.secteur.id=== value) {
        console.log("getSecteur "+value+" found "+obj.secteur.name);
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


SecteurData.getData=function(id){
    console.log('getData::', id);
    if (!id){
        console.log('getData no id::'+Secteurs.secteur.name);
        return Secteurs.secteur;
    }
    let data = getSecteur(Secteurs,  id);
    return data;
}
module.exports=SecteurData;