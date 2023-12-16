
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white,
    },
    notification:{
        width:'100%',
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        textAlign:'center',
        marginTop:10
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin:5
    },
    notification_details:{
      marginVertical:10
    },
    this_week_notification:{
        width:400,
        height:430,
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:colors.DividingLine,
        marginVertical:15
    },
      ellipsisIcon: {
        color: colors.DividingLine,
        marginTop: 4,
        marginLeft: 2,
      },
      comments_container: {
        // flexDirection: 'row',
        // marginLeft: '16%'
      },
      comment_sub_Container:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top:0,
        flexDirection: 'row',
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        justifyContent:'space-between',
        marginLeft:6
      },
      commentContainer: {
        width: '100%',
        height:75,
        borderTopColor:colors.seprator,
        borderTopWidth:1,
      },
      input_Container:{
        width: '70%', 
        height: 42,    
      },
      commentInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: 'black',
        backgroundColor:colors.seprator,
        marginLeft:8
      },
      postButton: {
        backgroundColor: colors.orange_color,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent:'center',
        width: 42,
        height: 42, 
      },
      postButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      image_container:{
        alignItems:'center',
        justifyContent:'center',
        height:75,
      },
      user_Icon:{
        borderRadius: 30,
        height: 55, 
        width:55,
      },
   
});

export default styles;
