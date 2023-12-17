import React, { useEffect, useCallback } from 'react';
import { View, BackHandler, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import CustomSearchBar from '../../assets/components/search_bar/CustomSearchBar';
import styles from './Styles';
import ProfileData from '../../assets/components/profile/ProfileData';

const Home = ({ navigation }) => {
  const isFocused = useIsFocused();

  const handleBackPress = useCallback(() => {
    BackHandler.exitApp();
    return true; 
  }, []);

  useEffect(() => {
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }
  }, [isFocused, handleBackPress]);

  return (
    <View style={styles.Container}>
      <View style={styles.header_style}>
        <CustomSearchBar />
      </View>
      <ScrollView>
        <ScrollView style={styles.scrollableContent}>
          <View style={styles.ProfileData1}>
            <ProfileData />
          </View>
          <View style={styles.ProfileData}>
            <ProfileData />
          </View>
          <View style={styles.ProfileData}>
            <ProfileData />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;




