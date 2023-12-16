
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        width: '100%',
        flexDirection:'row',
        margin:30,
        height:60,
        alignItems: 'center',
    },
    data_container: {
        marginLeft:7
    },
    user_name: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
    },
    text_details:{
        fontSize: 11,
        color: colors.DividingLine,
    },
    inputContainer: {
        backgroundColor: colors.seprator,
        marginHorizontal:30,
        borderRadius:15,
        paddingLeft:10,
        height:130,
        width: '85%',
    },
    text_nput:{
        color:colors.BLACK,
        fontSize:12
    },
    profile_cover: {
        width: 150,
        height: 140,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop:25,
        marginLeft:30
    },
    profile_cover_text: {
        fontWeight: "bold",
        fontSize: 10,
        color: colors.DividingLine,
    },
    cover_Icon:{
        color: colors.DividingLine,
    },
    button_upload:{
        backgroundColor: colors.Button_Background_Color,
        borderRadius: 15,
        padding:15,
        marginHorizontal:30,
        marginTop:'50%'
    },
    Button_text: {
        fontSize: 16,
        color: colors.white,
        fontWeight:'bold',
        textAlign:'center'
    },
});

export default styles;
