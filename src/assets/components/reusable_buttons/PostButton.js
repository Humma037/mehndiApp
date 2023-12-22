import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PostButton = ({ onPress, iconComponent, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {iconComponent}
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    width:90,
    height:37,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 11,
    // margin:5
  },
});

export default PostButton;
