import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
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
    cover_photo: {
        width: '90%',
        height: 155,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
        position: 'absolute',
        top:20,
    },
    user_Icon: {
        width: 110,
        height: 110,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 33,
        paddingVertical: 20,
        borderRadius: 60,
        color: colors.DividingLine,
        zIndex: 999,
        marginTop: 120
    },
    sub_Container: {
        alignItems: 'center',
        height: 200,
        padding: 20
    },
    user_name: {
        color: colors.BLACK,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        zIndex: 1,
        marginTop:15
    },
    description_text: {
        color: '#767676',
        textAlign: 'center',
        fontSize: 12,
        width: '75%',
        paddingTop:3
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
        marginLeft:5,
        alignItems:'center',
    },
    heading: {
        fontSize: 11,
        color: '#767676',
        textAlign: 'center'
    },
    line_container: {
        alignItems:'center',
        justifyContent:'center',
        height:60,
    },
    line: {
        backgroundColor: '#000',
        width: 1,
        height: 26,
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
        paddingVertical: 15,
        width:'100%',
        alignItems:'center',
    },
    button: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth:1,
        borderColor:colors.BLACK,
        width:'28%',
        height:37,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 3,
        fontSize:10,
    },
    editIcon: {
        color: colors.BLACK,
    },
    photo_cover_Icon: {
        color: colors.white,
        position:'absolute',
        bottom:65,
        right:'8%',
        backgroundColor:'rgba(67, 66, 64, 1)',
        padding:6,
        borderRadius:25,
    },
    profile_edit_Icon: {
        color: colors.white,
        position:'absolute',
        bottom:10,
        right:'37%',
        backgroundColor:'rgba(67, 66, 64, 1)',
        padding:5,
        borderRadius:25,
        zIndex:99999
    },
    text_container: {
        flexDirection: 'row',
        width: '65%',
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
    },
    images_container: {
        marginTop: 10,
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
        borderRadius:12
    },
    images_sub: {
        marginBottom: '15%'
    },
    header_container:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      centerImage: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      

});

export default styles;