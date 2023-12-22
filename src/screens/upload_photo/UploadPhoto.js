import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import { useNavigation } from '@react-navigation/native';
import OpenImageHeader from '../../assets/components/custom_hearder/OpenImageHeader';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import styles from './Style';

const UploadPhoto = () => {
  const navigation = useNavigation();
  const [caption, setCaption] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [userName, setUserName] = useState('');
  const [userBio, setUserBio] = useState('');
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const [coverPhotoURL, setCoverPhotoURL] = useState(null);

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

          setProfilePictureURL(userData.profilePictureURL || null);
          setCoverPhotoURL(userData.coverPhotoURL || null);
          setUserName(retrievedUserName);

          // Fetch user bio data
          const bioDoc = await firestore().collection('user_bios').doc(userId).get();
          const bioData = bioDoc.data();
          setUserBio(bioData ? bioData.bio : '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const chooseImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setImageUri(response.uri);
      }
    });
  };

  const uploadPhoto = async () => {
    // Your photo upload logic here
  };

  return (
    <View style={styles.Container}>
      <OpenImageHeader
        name="Upload Photo"
        icon="cross"
        backgroundColor="white"
        iconColor="white"
        nameColor="black"
        iconBackgroundColor="#E8A644"
        headerBackgroundColor="white"
        headerMainBackgroundColor="white"
        navigation={navigation}
      />
      <View style={styles.sub_container}>
        {/* <View style={{position:'absolute'}}> */}
        <View style={styles.ProfileImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          ) : (
            <ProfileImage />
          )}
        </View>
        {/* </View> */}
        <View style={styles.data_container}>
          <Text style={styles.user_name}>{userName}</Text>
          <Text style={styles.text_details}>{userBio}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write caption about your photo..."
          multiline
          placeholderTextColor="#767676"
          style={styles.text_nput}
          value={caption}
          onChangeText={text => setCaption(text)}
        />
      </View>
      <TouchableOpacity onPress={chooseImage}>
        <View style={styles.profile_cover}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.cover_Icon} />
          ) : (
            <FontAwesome name="image" size={25} style={styles.cover_Icon} />
          )}
          <Text style={styles.profile_cover_text}>Choose photo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_upload} onPress={uploadPhoto}>
        <Text style={styles.Button_text}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadPhoto;
