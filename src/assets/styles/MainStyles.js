import { StyleSheet, Dimensions } from "react-native";
import colors from "../theme/Color";

const { width, height } = Dimensions.get('screen')

const MainStyles = StyleSheet.create({

    Home_Container: {
        width: width,
        height: height,
        backgroundColor: "green"
    },

    Direction_Horizental: {
        flexDirection: 'row'
    },

    Direction_Vertical: {
        flexDirection: 'column'
    },

    Items_Center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    text_regular: {
        fontStyle: "normal",
        fontSize: 14,
    },

    text_bold: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#455A64'
    },

    title_regular: {
        fontStyle: "normal",
        fontSize: 24,
    },

    title_bold: {
        fontStyle: "normal",
        fontSize: 24,
    },
    text_center: {
        textAlign: 'center'
    },
    margin_vertical: {
        marginVertical: 15
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18.5,
        color:colors.BLACK
    },
    text_size:{
        color:colors.text_color,
        textAlign:'center',
        fontSize:12,
        width:350,
        padding:10
    },
    heading_second: {
        fontWeight: "bold",
        fontSize: 18,
        color:colors.heading_second
    },
    space_between:{
        justifyContent:'space-between'
    },
    margin_top:{
        marginTop:20
    }

})

export default MainStyles;