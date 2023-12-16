import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ClickableText = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text:{
    color:'#000',
    fontWeight:'bold'
  }
});

export default ClickableText;
