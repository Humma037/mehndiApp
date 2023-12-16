
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:20,
        height:70,
        alignItems:'center'
    },
    text_style: {
        marginLeft: 27
    },
    image_Container: {
        width: '100%',
    },
    searchbar_style: {
        margin: 5,
    },
    heading_Favorites: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
    },
    catgories_image_container: {
        marginBottom: '22%',
        // paddingHorizontal:20
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        // marginTop:10
    },
    catgories_margin: {
        margin:5,
    },
    back_button_container:{
        backgroundColor: colors.orange_color,
        borderRadius: 25,  
        width: 37,
        height: 37, 
    },
    back_button: {
        color: colors.white,
        paddingHorizontal:11,
        paddingVertical:3,
        width: 35,
        height: 35,
    },
    last_catgorie_container:{
        marginBottom:10
    },
    heart_Icon_container:{
        backgroundColor: colors.seprator,
        borderRadius: 25,  
        width: 37,
        height: 37, 
    },
    heart_Icon:{
        color: colors.Red,
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
        height: 37,
      },
      heading_second:{
        marginTop:15,
        marginBottom:10
      }
});

export default styles;