import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton';
import MainStyles from '../../../assets/styles/MainStyles';
import styles from './Styles';
import InputField from '../../../assets/components/input_Field/InputField';
import ClickableText from '../../../assets/components/reusable_buttons/ClickableText';
import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader';
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');

  useEffect(() => {
    // Check if the user is already authenticated
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, navigate to the 'Home' screen
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        );
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSignUp = () => {
    if (password.length >= 8 && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .set({ Name, email })
            .then(() => {
              console.log('User data added to Firestore successfully');
            })
            .catch(error => console.error('Error adding user data to Firestore:', error));
        })
        .catch(error => console.error('Registration error:', error));
    } else {
      console.log('Password criteria not met.');
    }
  };



  return (
    <View style={styles.Container}>
      <CustomHeader navigation={navigation} style={styles.header_style} />
      <ScrollView>
        <View style={styles.pana_style}>
          <Image
            source={require('../../../assets/Images/pana_two.png')}
            resizeMode="cover"
            style={styles.image_size}
          />
        </View>
        <View style={styles.Text_container}>
          <Text style={[MainStyles.heading]}>Create Account</Text>
          <Text style={styles.Text}>Lorem ipsum dolor sit amet. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
        </View>
        <View>
          <View style={styles.TextInput}>
            <InputField
              placeholder="Name"
              keyboardType="default"
              onChangeText={(text) => setName(text)}
            />
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
          <View style={styles.button_style}>
            <ProceedButton title="Home" onPress={handleSignUp} />
          </View>
          <View style={styles.account_Register_contanier}>
            <Text style={styles.account_text}>Already have an account?</Text>
            <ClickableText
              text="Sign In"
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.account_Register}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
