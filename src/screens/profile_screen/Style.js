
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.Red
    },
    text_style: {
        fontSize: 12,
        marginLeft: 25,
        padding: 5
    },
    name_style: {
        margin: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        left: 120
    },
    profile_cover: {
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
        padding: 20
    },
    cover_photo: {
        width: '100%',
        height: 143,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 15,
        position: 'absolute',
    },
    user_Icon: {
        width: 100,
        height: 100,
        backgroundColor: colors.seprator,
        paddingHorizontal: 33,
        paddingVertical: 20,
        borderRadius: 50,
        color: colors.DividingLine,
        zIndex: 999,
        marginTop: 65
    },
    sub_Container: {
        alignItems: 'center',
        height: 200,
        padding: 20
    },
    user_name: {
        color: colors.BLACK,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        zIndex: 1
    },
    description_text: {
        color: colors.DividingLine,
        textAlign: 'center',
        fontSize: 11,
        width: '75%',
        color: '#767676',
        marginTop:3
    },
    user_data: {
        alignItems: 'center',
    },
    accountsDirection: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingTop: 15,
        marginLeft:8,
        // height:60,
        alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'blue'
    },
    heading: {
        fontSize: 11,
        color: '#767676',
        textAlign: 'center'
    },
    line_container: {
        alignItems:'center',
        justifyContent:'center',
        height:40,
    },
    line: {
        backgroundColor: '#767676',
        width: 1,
        height: 27,
    },
    numbers_heading: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    numbers_margin: {
        alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
        paddingVertical: 20,
    },
    button: {
        flex: 1,
        backgroundColor: colors.orange_color,
        padding: 7,
        borderRadius: 30,
        marginHorizontal: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    activeButton: {
        backgroundColor: '#eee',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
    text_container: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    activeTab: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'orange',
    },
    tabText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        // marginHorizontal: 1,
    },
    images_container: {
        marginTop: 15,
    },
    images_sub_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
    },
    image: {
        width: '32%',
        height:100,
        margin: 4,
    },
    images_sub: {
        marginBottom: '25%'
    }

});

export default styles;