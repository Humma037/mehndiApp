import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Updated import
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import { useNavigation } from '@react-navigation/native';
import OpenImageHeader from '../../assets/components/custom_hearder/OpenImageHeader';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import styles from './Style';

const UploadPhoto = () => {
  const navigation = useNavigation();
  const [caption, setCaption] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const chooseImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setImageUri(response.uri);
      }
    });
  };

  const uploadPhoto = async () => {
    try {
      if (!imageUri || !caption) {
        Alert.alert('Error', 'Please choose an image and write a caption.');
        return;
      }

      const response = await fetch(imageUri);
      const blob = await response.blob();

      const folderName = 'user-posts';
      const fileName = `${Date.now()}_${Math.random()}.jpg`;

      // Upload image to Firebase Storage
      const storageRef = storage().ref(`${folderName}/${fileName}`);
      await storageRef.put(blob);

      // Get the download URL
      const downloadURL = await storageRef.getDownloadURL();

      // Save data to Firestore
      await firestore().collection('userPosts').add({
        caption: caption,
        imageUrl: downloadURL,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      // Reset state
      setImageUri(null);
      setCaption('');

      // Show success alert
      Alert.alert('Success', 'Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading photo:', error.message);
      Alert.alert('Error', 'There was an error uploading the photo.');
    }
  };

  return (
    <View style={styles.Container}>
      <OpenImageHeader
        navigation={navigation}
        name="Upload Photo"
        icon="cross"
        backgroundColor="white"
        iconColor="white"
        nameColor="black"
        iconBackgroundColor="#E8A644"
        headerBackgroundColor="white"
        headerMainBackgroundColor="white"
      />
      <View style={styles.sub_container}>
        <View style={styles.ProfileImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          ) : (
            <ProfileImage />
          )}
        </View>
        <View style={styles.data_container}>
          <Text style={styles.user_name}>Lady Gaga</Text>
          <Text style={styles.text_details}>Lorem ipsum doler milra dilrof</Text>
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
