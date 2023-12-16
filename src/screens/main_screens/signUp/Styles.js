
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.white
  },
  pana_style: {
    alignItems: 'center',
    width: '100%',
    flex:1,
    height:230
  },
  image_size:{
    width:'55%',
    height:'90%'
  },
  Text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%'
  },
  TextInput:{
    paddingVertical:3
  },
  Text: {
    fontSize: 11,
    color: colors.text_color,
    textAlign: 'center',
    padding: 8
  },
  button_style: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:5
  },
  account_Register: {
    flexDirection: 'row',
    color: colors.orange_color,
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize:11
  },
  account_text: {
    color: colors.text_color,
    fontSize:10,
  },
  account_Register_contanier:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:5
  },
});

export default styles;