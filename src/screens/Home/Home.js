import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import CustomSearchBar from '../../assets/components/search_bar/CustomSearchBar';
import styles from './Styles';
import ProfileData from '../../assets/components/profile/ProfileData';

const Home = () => {

  return (
    <View style={styles.Container}>
      <View style={styles.header_style}>
      <CustomSearchBar/>
      </View>
      <ScrollView>
        <ScrollView style={styles.scrollableContent}>
          <View style={styles.ProfileData1}>
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

