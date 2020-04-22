import {Image} from "react-native";
import React from "react";

export default  (source) => {
    if (!!source){

    const { width, height } = Image.resolveAssetSource(source);
        return <Image source={source} style={{ marginBottom:10,marginTop:10, width: null, height: null, resizeMode: 'cover', aspectRatio: width / height }} />
    }
}
