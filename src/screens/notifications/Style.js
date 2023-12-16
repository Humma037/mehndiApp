
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white
    },
    notification: {
        width: '100%',        
    },
    sub_container: {
        width: '100%',
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        marginTop: 15,
        marginLeft:30
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin: 10,
        marginLeft:30
    },
    notification_details: {
        width: '100%'
    },
    notification_container: {
        width: '100%',        
    },
    notification_dont: {
        width: 8,
        height: 8,
        backgroundColor: colors.orange_color,
        borderRadius: 4,
        position: 'absolute',
        top: '44%',
        right: '100%',
        zIndex: 1
    },
    dimiss_icon: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 23,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 20,
        position: 'absolute',
        bottom: 62,
        right: 20
    },

});

export default styles;
