
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  pana_style: {
    alignItems: 'center',
    width: '100%',
    padding: '5%',
    marginBottom: 20,
    flex:1,
    height:200
  },
  Image_style: {
    width: '70%',
    height: '50%',
    flex:1
  },
  Text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%'
  },
  Text: {
    fontSize: 11,
    textAlign: 'center',
    padding: 8,
    color: colors.text_color
  },
  sub_container: {
    paddingVertical: 10,
    marginTop: 10
  },
  button_style: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  account_Register: {
    flexDirection: 'row',
    color: colors.orange_color,
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 11
  },
  account_text: {
    color: colors.text_color,
    fontSize: 11,
  },
  account_Register_contanier: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15
  },
  Clickable_Text: {
    color: colors.text_color,
    textAlign: 'center',
    paddingLeft: 5,
    marginLeft: '23%',
    fontSize: 11.5
  }
});

export default styles;