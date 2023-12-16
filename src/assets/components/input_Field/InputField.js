import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/Color';

const InputField = ({ iconName, placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.Input_Container}>
      <View style={styles.Input_sub_Container}>
        <View style={styles.inputIcon}>
          <FontAwesome name={iconName} size={23} color="#000" />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#767676"
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Input_Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input_sub_Container: {
    width:'65%',
    height: 49,
    flexDirection: 'row',
    borderRadius: 28,
    marginTop: 10,
    backgroundColor: colors.seprator,
    paddingLeft: 20
  },
  inputIcon: {
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize:12
  },
});

export default InputField;
