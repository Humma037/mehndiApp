import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/Color';

const PostImageFooter = ({ onPress, iconComponent, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {iconComponent}
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 9,
    marginLeft:3
  },
});

export default PostImageFooter;
