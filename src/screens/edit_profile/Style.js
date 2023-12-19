
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    text_style: {
        fontSize: 14,
    },
    Boi_text_style:{
        fontSize: 14,
marginTop:30
    },
    button_container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingHorizontal: 60,
        // paddingVertical: 25,
        width:'100%',
        justifyContent:'flex-end',
    },
    button: {
        // flex: 1,
        backgroundColor: colors.orange_color,
        // padding: 10,
        borderRadius: 30,
        // marginHorizontal: 5,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: 'transparent', 
        width:'27%',
        marginTop:27,
        height:35,
        marginLeft:5

    },
    activeButton: {
        backgroundColor: colors.white,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:12
    },
    line_style:{
        width:'100%',
        height:1,
        backgroundColor:colors.DividingLine,
        marginVertical:5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 20,
        justifyContent:'space-between',
        width:'100%'
      },
      input_sub_Container:{
        width:'48.5%',
        // margin:5
      },
      textInput: {
        // height: 45,
        borderBottomWidth: 1,
        borderColor: colors.DividingLine,
        width:'100%',
        fontSize:13,
        marginVertical:5,
        color:'black',
        paddingLeft:0,
        height:'auto'
      },

      sub_Container:{
        width:'100%',
        alignItems:'center',
        paddingHorizontal:25,
        marginTop:30
      },
      Bioinput_sub_Container:{
        width:'100%'
      }

});

export default styles;