
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification: {
        width: '100%',
        // marginTop:15,
        paddingHorizontal:30
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
    },
    notification_details: {
        marginVertical: 8,
    },
    data_container: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:20

    },
    this_week_notification:{
        marginTop:10,
    },
    second_sub_container:{
        marginBottom:'20%'
    }
});

export default styles;
