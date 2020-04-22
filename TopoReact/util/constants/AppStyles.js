import Color from "./Colors";
import normalize from "../NormalizeText";

export default {
    scView: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20
    },
    h1: {
        color: Color.gray1,
        fontSize: normalize(18),
        marginBottom: 8,

    },
    paragraph: {
        fontSize: normalize(10),
        marginBottom: 8,

    },

    divider: {
        backgroundColor: Color.gray1
    },

}

