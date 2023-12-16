import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center',
        // justifyContent:'center',
        // height:90,
        paddingVertical:10,
        paddingHorizontal:20,
        width:'100%',
    },
    slide_Container: {
        padding: 5
    },
    text_style: {
        fontSize: 13,
        padding: 5,
        marginLeft: 10,
        marginTop:5,
        fontWeight:'bold',
    },
    image_Container: {
        width: '100%',
        paddingHorizontal: 16,
    },
    searchbar_style: {
        // marginHorizontal: 5,
        // marginRight:5
    },
    heading_all_categories: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
    },
    catgories_image_container: {
        // paddingRight: 3
        // padding:5,
        marginTop:5
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        alignContent:'center',
        justifyContent:'center',
        width: '100%',
        paddingHorizontal:20,
    },
    catgories_margin: {
        margin: 5,
    },
    search_container: {
        // marginTop: 10,
        // paddingLeft:18
        // width:40
    },
    last_catgorie_container:{
        marginBottom:'25%'
    },
    heart_Icon_container:{
        backgroundColor: colors.seprator,
        borderRadius: 25,  
        width: 37,
        height: 37, 
        marginLeft:10,
    },
    heart_Icon:{
        color: colors.BLACK,
        paddingHorizontal:9,
        paddingVertical:10,
        width:37,
        height:37
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
        width: 220,
        backgroundColor: colors.seprator,
        height: 38,
      },
});

export default styles;