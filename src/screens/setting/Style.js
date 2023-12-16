
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_Container:{
        alignItems: 'center',
        height:170,
    },
    bars_Icon:{
        fontSize: 27,
        color: colors.BLACK,
        margin:20,
    },
    setting_options_icon:{
        fontSize: 30,
        color: colors.BLACK,
    },
    cover_photo: {
        width: '92%',
        height:110,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.seprator,
        borderRadius: 15,
        position:'absolute',
        top:40,
    },
    user_Icon: {
        width: 80,
        height: 80,
        backgroundColor: colors.seprator,
        paddingHorizontal: 26,
        paddingVertical: 15,
        borderRadius: 50,
        color: colors.DividingLine,
        zIndex:999
    },
    user_name: {
        fontSize: 14,
        color: colors.BLACK,
        fontWeight:'bold',
        marginTop:20
    },
    view_profile: {
        fontSize: 11,
        color: '#767676',
    },
    setting_options_container:{
        width: '100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    setting_options:{
        width: '45%',
        height:110,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.seprator,
        borderRadius: 15,
        margin:5,
    },
    setting_options_text:{
        fontSize: 14,
        color: colors.BLACK,
        fontWeight:'bold',
    },
    setting_last_options_container:{
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    compare_setting_options:{
        width: '47.5%',
        height:110,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.seprator,
        borderRadius: 15,
        margin:5,
    },
    compare_category:{
        paddingHorizontal:10
    }

});

export default styles;
