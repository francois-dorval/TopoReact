
import { logger } from 'react-native-logs';
let log = logger.createLogger({ severity: 'info'});


function SecteurName(){

}

/**
 * avec emoji montagne pour les sites...
 * @param data
 * @returns {string|*}
 */

SecteurName.getName=function(secteurData) {
    let mountain=String.fromCodePoint(0x1F3D4);
    log.debug("getName "+JSON.stringify(secteurData))
    if (secteurData.level===1){
        if (secteurData.name.startsWith(mountain)){
            return secteurData.name;
        }else{
            let result= mountain+" "+secteurData.name;
            return result.toString();
        }

    }else{
        return secteurData.name;

    }
}

export default SecteurName;