import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton';
import MainStyles from '../../../assets/styles/MainStyles';
import styles from './Styles';
import InputField from '../../../assets/components/input_Field/InputField';
import ClickableText from '../../../assets/components/reusable_buttons/ClickableText';
import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPress = async () => {
    try {
      // Input validation
      if (!email.trim() || !password.trim()) {
        Alert.alert('Invalid Input', 'Please enter both email and password.');
        return;
      }
  
      const response = await auth().signInWithEmailAndPassword(email, password);
  
      if (response.user) {
        // Successfully signed in, navigate to the home screen
        navigation.navigate('Home');
        
        Alert.alert('Success', 'You have successfully logged in.');
      } else {
        Alert.alert('Invalid Credentials', 'Please check your email and password.');
      }
    } catch (error) {
      console.error('Sign In Error:', error);
      Alert.alert('Authentication Failed', 'An error occurred during sign-in. Please try again later.');
    }
  };
  
  

  return (
    <View style={styles.Container}>
      <CustomHeader navigation={navigation} style={styles.header_style} />
      <ScrollView>
        <View style={styles.pana_style}>
          <Image
            source={require('../../../assets/Images/pana_third.png')}
            resizeMode="cover"
            style={styles.Image_style}
          />
        </View>
        <View style={styles.Text_container}>
          <Text style={[MainStyles.heading]}>Login to your Account</Text>
          <Text style={styles.Text}>Lorem ipsum dolor sit amet pretium. Id congue pretium curabitur cras. Massa quam convallis phasellus </Text>
        </View>
        <View style={styles.TextInput}>
          <InputField
            placeholder="Email"
            secureTextEntry={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.TextInput}>
          <InputField
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <ClickableText
          text="Forgot password ?"
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={styles.Clickable_Text}
        />
        <View style={styles.button_style}>
          <ProceedButton title="Login" onPress={handleSignInPress} />
        </View>
        <View style={styles.account_Register_contanier}>
          <Text style={styles.account_text}>Dont have an account ?</Text>
          <ClickableText
            text="Sign Up"
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.account_Register}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
