import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const FollowersComp = ({ activeColor, button1Text, button2Text }) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.sub_container}>
        <View style={styles.textAndButtonContainer}>
          <View style={styles.textAndButton_direction}>
            <View style={styles.user_profile}>
              <FontAwesome name="user" size={30} style={styles.user_Icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text_heading}>Mister Perfect</Text>
              <Text style={styles.text}>12:32 AM</Text>
            </View>
          </View>
          <View>
            <View style={styles.button_sub_container}>
              <TouchableOpacity
                style={[styles.button, activeButton === 2 && { backgroundColor: activeColor }]}
                onPress={() => handleButtonPress(2)}
              >
                <Text style={styles.buttonText}>{button2Text}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, activeButton === 1 && { backgroundColor: activeColor }]}
                onPress={() => handleButtonPress(1)}
              >
                <Text style={styles.buttonText}>{button1Text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FollowersComp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  sub_container: {
    flexDirection: 'row',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: colors.seprator,
    padding: 7,
    borderRadius: 25,
    alignItems:'center',
    height:75
  },
  textAndButton_direction:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  user_Icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.themeLightGrey,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 50,
    color: colors.DividingLine,
  },
  text_heading: {
    fontWeight: 'bold',
    fontSize: 11,
    color: colors.light_black,
  },
  text: {
    fontSize: 10,
    color: colors.DividingLine,
    marginTop: 2,
  },
  button_sub_container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.orange_color,
    borderRadius: 25,
    marginLeft: 3,
    width:72,
    height:32,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 9,
  },
  user_profile: {
    marginRight: 5
  }
});
