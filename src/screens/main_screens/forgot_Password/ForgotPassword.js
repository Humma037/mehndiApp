import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton';
import MainStyles from '../../../assets/styles/MainStyles';
import styles from './Styles';
import InputField from '../../../assets/components/input_Field/InputField';
import ClickableText from '../../../assets/components/reusable_buttons/ClickableText';
import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'Please check your email for instructions on resetting your password.');
      // Clear the input field
      setEmail('');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('User Not Found', 'This email is not associated with any account. Please sign up first.');
        navigation.navigate('Register');
      } else {
        Alert.alert('Error', 'An error occurred while processing your request. Please try again.');
      }
    }
  };

  return (
    <View style={styles.Container}>
      <CustomHeader navigation={navigation} style={styles.header_style} />
      <ScrollView>
        <View style={styles.pana_style}>
          <Image
            source={require('../../../assets/Images/pana_fourth.png')}
            resizeMode="cover"
            style={styles.Image_style}
          />
        </View>
        <View style={styles.Text_container}>
          <Text style={[MainStyles.heading]}>Reset Password</Text>
          <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
        </View>
        <View style={styles.sub_container}>
          <View style={styles.TextInput}>
            <InputField
              placeholder="Email"
              secureTextEntry={false}
              onChangeText={(text) => setEmail(text)}
              value={email} 
            />
          </View>
          <View style={styles.button_style}>
            <ProceedButton title="Confirm" onPress={handleForgotPassword} />
          </View>
        </View>
        <View style={styles.account_Register_contanier}>
          <Text style={styles.account_text}>Back to</Text>
          <ClickableText
            text="Sign In"
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.account_Register}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
