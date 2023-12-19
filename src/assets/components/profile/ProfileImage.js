import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const ProfileImage = () => {
  const navigation = useNavigation();
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const userId = auth().currentUser ? auth().currentUser.uid : null;

      if (userId) {
        try {
          const storageRef = storage().ref(`profilePictures/${userId}`);
          const downloadURL = await storageRef.getDownloadURL();
          setProfileImageUrl(downloadURL);
        } catch (error) {
          console.error('Error fetching profile image:', error);
        }
      }
    };

    fetchProfileImage();
  }, []);

  const handleProfileImagePress = () => {
    navigation.navigate('MainProfile');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleProfileImagePress}>
        <Image
          source={profileImageUrl ? { uri: profileImageUrl } : require('../../Images/Hijab-Dp.jpg')}
          style={styles.user_Icon}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  user_Icon: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});

export default ProfileImage;
