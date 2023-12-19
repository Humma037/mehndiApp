
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    notification: {
        width: '100%',
        marginTop:15,
    },
    text: {
        fontWeight: "bold",
        fontSize: 11,
        color: colors.light_black,
    },
    remove_button:{
        backgroundColor:colors.orange_color,
        width:'32%',
        height:33,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 14,
        color: colors.light_black,
    },
    notification_details: {
        marginVertical: 8,
    },
    data_container: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        marginTop:20
    },
    this_week_notification:{
        marginTop:10,
    },
    second_sub_container:{
        marginBottom:'20%'
    },

});

export default styles;
