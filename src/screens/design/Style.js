
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    catgories_container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        paddingHorizontal:20
    },
    catgories_margin: {
        margin: 5,
    },
    sub_container: {
        flexDirection: 'row',
        width:'100%',
        padding:20,
        justifyContent:'space-between'
    },
    text_style: {
        fontSize: 13,
        padding: 5,
    },
    image_Container: {
        width: '100%',
        paddingHorizontal: 18,
    },
    heading_all_design: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        marginTop: '7%',
        marginBottom:5
    },
    image_style: {
        width: '100%',
        height: 150,
    },
    back_button_container:{
        backgroundColor: colors.orange_color,
        borderRadius: 25,  
        width: 37,
        height: 37, 
    },
    back_button: {
        color: colors.white,
        paddingHorizontal:12,
        paddingVertical:3
    },
    last_catgories_container: {
        marginBottom: '25%'
    },
    heart_Icon_container:{
        backgroundColor: colors.seprator,
        borderRadius: 25,  
        width: 37,
        height: 37, 
    },
    heart_Icon:{
        color: colors.BLACK,
        paddingHorizontal:9,
        paddingVertical:10
    },
    search_Input: {
        fontSize: 12,
        padding: 5,
      },
      search_Icon: {
        color: colors.DividingLine,
      },
      search_container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 230,
        backgroundColor: colors.seprator,
        height: 38,
      },
});

export default styles;