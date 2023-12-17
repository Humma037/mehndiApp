import React, { useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton';
import MainStyles from '../../../assets/styles/MainStyles';
import styles from './Styles';
import auth from '@react-native-firebase/auth';

const GetStarted = ({ navigation }) => {
  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // If authenticated, navigate to Home directly
        navigation.navigate('Home');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleContinuePress = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <ScrollView style={styles.Container}>
      <Text style={{ textAlign: 'center', color: 'blue', marginTop: 25, fontWeight: 'bold', fontSize: 17, color: '#455A64' }}>Welcome to Cliquey!</Text>
      <View style={{ alignItems: 'center', marginVertical: '7%' }}>
        <View style={MainStyles.Direction_Horizental}>
          {/* Image One */}
          <View style={styles.image_style}>
            <Image
              source={require('../../../assets/Images/image_one.png')}
              resizeMode="cover"
            />
          </View>
          {/* Image Two and Three */}
          <View>
            <View style={styles.image_style}>
              <Image
                source={require('../../../assets/Images/image_two.png')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.image_style}>
              <Image
                source={require('../../../assets/Images/image_three.png')}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        {/* Image Six */}
        <View style={styles.image_style}>
          <Image
            source={require('../../../assets/Images/image_six.png')}
            resizeMode="cover"
          />
        </View>
        <View style={MainStyles.Direction_Horizental}>
          {/* Image Five */}
          <View style={styles.image_style}>
            <Image
              source={require('../../../assets/Images/image_five.png')}
              resizeMode="cover"
            />
          </View>
          {/* Image Four */}
          <View style={styles.image_style}>
            <Image
              source={require('../../../assets/Images/image_four.png')}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <ProceedButton title="Get Started" onPress={handleContinuePress} />
      </View>
    </ScrollView>
  );
};

export default GetStarted;
