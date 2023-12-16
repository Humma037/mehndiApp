import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const LikesComp = () => {
  const handleButtonPress = () => {
  };

  return (
    <View style={styles.Container}>
      <View style={styles.textAndButtonContainer}>
        <View style={styles.data_Container}>
          <FontAwesome name="user" size={30} style={styles.user_Icon} />
          <View style={styles.textContainer}>
            <Text style={styles.text_heading}>Mister Perfect</Text>
            <Text style={styles.text}>12:32 AM</Text>
          </View>
        </View>
        <View>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LikesComp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  data_Container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  textAndButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: colors.seprator,
    borderRadius: 25,
    height: 70,
    alignItems: 'center',
    paddingHorizontal:15
  },
  textContainer: {
    marginHorizontal: 10,
  },
  user_Icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.themeLightGrey,
    paddingHorizontal: 14,
    paddingVertical: 7,
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
    marginTop: 4,
  },
  button: {
    backgroundColor: '#eee',
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: colors.BLACK,
    width: 85,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 9,
  },
});
