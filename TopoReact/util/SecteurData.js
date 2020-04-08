import Secteurs from '../assets/secteurs/secteurs';
import _ from 'lodash'

function SecteurData() {
}

function getSecteur(obj,  value) {
    console.log("getSecteur "+obj["id"]);
    if (!obj){
        return null;
    }
    if (obj.id=== value) {
        return obj;
    }
    let subs = obj.subsecteurs;
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
    let data = getSecteur(Secteurs,  id);
    return data;
}
module.exports=SecteurData;