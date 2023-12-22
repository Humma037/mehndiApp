import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import SettingDropDown from '../../assets/components/SettingDropDown';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Setting = () => {
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [userName, setUserName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth().currentUser ? auth().currentUser.uid : null;
        if (userId) {
          const userDoc = await firestore().collection('users').doc(userId).get();
          const userData = userDoc.data();

          console.log('Fetched user data:', userData);

          const retrievedUserName = userData.Name || '';
          console.log('Retrieved userName:', retrievedUserName);

          setProfileImageUrl(userData.profilePictureURL || null);
          setCoverPhotoUrl(userData.coverPhotoURL || null);
          setUserName(retrievedUserName);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSettingBarPress = () => {
    navigation.navigate('Home');
  };

  // handleLogout
  const handleLogout = async () => {
    try {
      console.log('Attempting to sign out...');
      await auth().signOut();
      console.log('Sign out successful!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error.message);
      Alert.alert('Error', 'There was an error signing out.');
    }
  };

  // handleDeleteAccount
  const handleDeleteAccount = async () => {
    try {
      console.log('Deleting account...');
      const user = auth().currentUser;

      if (user) {
        // Delete the user
        await user.delete();
        console.log('Account deleted successfully!');
        navigation.navigate('Register');
      } else {
        console.log('No user found to delete.');
      }
    } catch (error) {
      console.error('Error deleting account:', error.message);
      Alert.alert('Error', 'There was an error deleting the account.');
    }
  };

  return (
    <View style={styles.Container}>
      {/* bar_Icon */}
      <TouchableOpacity onPress={handleSettingBarPress}>
        <FontAwesome6 name="bars" style={styles.bars_Icon} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.sub_Container}>
          {/* user_profile */}
          {profileImageUrl ? (
            <Image source={{ uri: profileImageUrl }} style={styles.user_Icon} />
          ) : (
            <FontAwesome name="user" size={40} style={styles.user_Icon} />
          )}
          {/* photo_cover */}
          <View style={styles.cover_photo}>
            <Text style={styles.user_name}>{userName}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
            <Text style={styles.view_profile}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* setting_options */}
        <View style={styles.setting_options_container} >
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons size={30} name='comment-text-multiple-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Downloads')}>
            <Ionicons size={30} name='cloud-download-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Downloads</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <Ionicons size={30} name='images-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons size={30} name='movie-open-play-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Likes')}>
            <AntDesign size={30} name='like2' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Favourites')}>
            <AntDesign size={30} name='hearto' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Followers')}>
            <Ionicons size={30} name='people-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Following')}>
            <MaterialCommunityIcons size={30} name='account-multiple-check-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.compare_category}>
          <TouchableOpacity style={styles.compare_setting_options} onPress={() => navigation.navigate('Compares')}>
            <Ionicons size={30} name='people-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Compares</Text>
          </TouchableOpacity>
        </View>
        <SettingDropDown
          heading="Settings & Privacy"
          gearIcon="settings"
          buttonData={[
            { text: 'Language', icon: 'language' },
            { text: 'Dark Mode', icon: 'moon-o' },
          ]}
        />
        <SettingDropDown
          heading="Help & Support"
          gearIcon="help-circle"
          initiallyExpanded={isDropdownOpen}
          buttonData={[
            { text: 'Help', icon: 'help-buoy-outline', iconLibrary: 'Ionicons' },
            { text: 'Support', icon: 'customerservice', iconLibrary: 'AntDesign' },
            { text: 'About', icon: 'infocirlceo', iconLibrary: 'AntDesign' },
            { text: 'Report Problem', icon: 'bug-outline', iconLibrary: 'Ionicons' },
          ]}
        />
        <SettingDropDown
          heading="Logout & Delete"
          gearIcon="log-out"
          buttonData={[
            { text: 'Logout', icon: 'power', iconLibrary: 'Feather', onPress: handleLogout },
            { text: 'Delete Account', icon: 'trash-2', iconLibrary: 'Feather', onPress: handleDeleteAccount },
          ]}
        />
      </ScrollView>
    </View>
  );
}

export default Setting;
