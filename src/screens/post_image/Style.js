
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        BackgroundColor:"green"
    },
    PostImage: {
        width: '100%',
        height:'90%',
    },
    container_post_Button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },
    post_Button: {
        // paddingHorizontal: 12,
        width:70,
        height:30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.seprator,
        backgroundColor: colors.BLACK,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_name: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.Red,
        marginLeft: 5
    },
    data_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
    },
    name_heading: {
        fontSize: 11,
        color: colors.white,
        fontWeight: 'bold'
    },
    time_style: {
        fontSize: 9,
        color: colors.white,
    },
    text_styling: {
        fontSize: 10,
        color: colors.white,
    },
    PostImageFooter: {
        width:'100%',
        backgroundColor: colors.BLACK,
        height:100,
        paddingHorizontal:30,
        position:'absolute',
        bottom:0,
        alignItems: 'center',
        justifyContent: 'center',

    }

});

export default styles;
