
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification: {
        width: '90%',
    },
    sub_container: {
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        margin: 5
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin: 5
    },
    notification_details: {
        margin: 8
    },
    notification_container: {
        // height: 175,
    },
    data_container: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25,
        paddingHorizontal:10
    },
    this_week_notification: {
        // height: 430,
    },
    second_sub_container:{
        alignItems:'center',
        justifyContent:'center'
    },
    notification_dont:{
        width:8,
        height:8,
        backgroundColor:colors.orange_color,
        borderRadius:4,
        position:'absolute',
        top:'44%',
        right:'98%',
        zIndex:1
    },
    dimiss_icon:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        // backgroundColor:colors.seprator,
        width:23,
        paddingHorizontal:3,
        paddingVertical:2,
        borderRadius:20,
        position:'absolute',
        bottom:65,
        right:3
    },
    notification_container:{
        marginTop:10
    }
});

export default styles;
