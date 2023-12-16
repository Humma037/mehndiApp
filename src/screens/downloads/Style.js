
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header_container: {
        width: '100%',
    },
    header_sub_container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding:17
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    search_Input: {
        fontSize: 12,
        backgroundColor: colors.seprator,
        color: colors.BLACK,
        borderRadius: 25,
        padding: 4
    },
    searchbar_style: {
        backgroundColor: colors.seprator,
        flexDirection: 'row',
        height: 37,
        width: 190,
        borderRadius: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginLeft: 15
    },
    heading_all_design: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        marginTop: '5%'
    },
    catgories_image_container: {
        marginBottom: '15%',
        marginTop: 10
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width:'80%'
    },
    catgories_margin: {
        margin: 5,
    },
    image_style: {
        width: '100%',
        height: 155,
    },
    bars_Icon: {
        color: colors.white,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 25,
        backgroundColor: colors.orange_color,
        height: 37,
        width: 37,
       
    },
    search_Icon: {
        color: colors.DividingLine
    },
    last_catgories_container: {
        marginBottom: '10%'
    },
    Filter_button: {
        flexDirection: 'row',
        backgroundColor: colors.seprator,
        // padding:8,
        // paddingHorizontal:22,
        borderRadius: 18,
        width: 85,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 8
    },
    Filter_button_text: {
        fontSize: 11,
        marginRight: 3,
    },
    filter_Icon: {
        // paddingVertical: 3
    }
});

export default styles;