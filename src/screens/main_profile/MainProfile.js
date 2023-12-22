import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const MainProfile = () => {
    const navigation = useNavigation();
    const [profilePictureURL, setProfilePictureURL] = useState(null);
    const [coverPhotoURL, setCoverPhotoURL] = useState(null);
    const [activeTab, setActiveTab] = useState(1);
    const [userName, setUserName] = useState('');
    const [userBio, setUserBio] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = auth().currentUser ? auth().currentUser.uid : null;
            if (userId) {
                const userDoc = await firestore().collection('users').doc(userId).get();
                const userData = userDoc.data();
                setProfilePictureURL(userData.profilePictureURL || null);
                const retrievedUserName = userData.Name || '';
                // const [userBio, setUserBio] = useState('');
            }
        };

        fetchUserData();
    }, []);

    const handleProfilePress = () => {
        navigation.navigate('EditProfile');
    };

    const handleTabPress = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    // selectCoverPicture
    const selectCoverPicture = async () => {
        try {
            const image = await ImagePicker.openPicker({
                cropping: true,
            });

            const userId = auth().currentUser ? auth().currentUser.uid : null;

            if (userId) {
                const storageRef = storage().ref(`coverPhotos/${userId}`);
                await storageRef.putFile(image.path);

                const downloadURL = await storageRef.getDownloadURL();
                await firestore().collection('users').doc(userId).update({
                    coverPhotoURL: downloadURL,
                });

                setCoverPhotoURL(downloadURL);
                console.log('Cover photo uploaded and URL updated successfully');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // selectProfilePicture
    const selectProfilePicture = async () => {
        try {
            const image = await ImagePicker.openPicker({
                cropping: true,
            });

            const userId = auth().currentUser ? auth().currentUser.uid : null;

            if (userId) {
                const storageRef = storage().ref(`profilePictures/${userId}`);
                await storageRef.putFile(image.path);

                const downloadURL = await storageRef.getDownloadURL();
                await firestore().collection('users').doc(userId).update({
                    profilePictureURL: downloadURL,
                });

                setProfilePictureURL(downloadURL);
                console.log('Profile picture uploaded and URL updated successfully');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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


    return (
        <ScrollView style={styles.container}>
            {/* <View style={styles.sub_Container}> */}

                <View style={styles.centerContainer}>
                    {/* selectCoverPicture */}
                    <TouchableOpacity onPress={selectCoverPicture} style={styles.centerImage}>
                        {coverPhotoURL ? (
                            <Image source={{ uri: coverPhotoURL }} style={styles.cover_photo} />
                        ) : (
                            <View style={styles.kjdkjmx} />
                        )}
                    </TouchableOpacity>
                    {/* selectProfilePicture */}
                    <TouchableOpacity onPress={selectProfilePicture} style={styles.centerImage}>
                        {profilePictureURL ? (
                            <Image source={{ uri: profilePictureURL }} style={styles.user_Icon} />
                        ) : (
                            <FontAwesome name="user" size={50} style={styles.user_Icon} />
                        )}
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={selectCoverPicture}>
                    <FontAwesome name="camera" size={13} style={styles.photo_cover_Icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={selectProfilePicture}>
                    <FontAwesome name="camera" size={11} style={styles.profile_edit_Icon} />
                </TouchableOpacity>


                <View style={styles.user_data}>
                    <Text style={styles.user_name}>{userName}</Text>
                    <Text style={styles.description_text}>{userBio}</Text>
                </View>
                <View style={styles.accountsDirection}>
                    <View style={styles.numbers_margin}>
                        <Text style={styles.numbers_heading}>3.9M</Text>
                        <Text style={styles.heading}>Likes</Text>
                    </View>
                    <View style={styles.line_container}>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.numbers_margin}>
                        <Text style={styles.numbers_heading}>35.5K</Text>
                        <Text style={styles.heading}>Followers</Text>
                    </View>
                    <View style={styles.line_container}>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.numbers_margin}>
                        <Text style={styles.numbers_heading}>3.2K</Text>
                        <Text style={styles.heading}>Following</Text>
                    </View>
                </View>

                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
                        <FontAwesome name="edit" size={17} style={styles.editIcon} />
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* HorizontalTextTabs */}
                <View style={styles.text_container}>
                    <View style={styles.tab_container}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 1 && styles.activeTab]}
                            onPress={() => handleTabPress(1)}
                        >
                            <Text style={styles.tabText}>All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tab_container}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 2 && styles.activeTab]}
                            onPress={() => handleTabPress(2)}
                        >
                            <Text style={styles.tabText}>Images</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tab_container}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 3 && styles.activeTab]}
                            onPress={() => handleTabPress(3)}
                        >
                            <Text style={styles.tabText}>Videos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.images_container}>
                    <View style={styles.images_sub_container}>
                        <Image
                            source={require('../../assets/Images/mehndi_design.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design2.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design3.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.images_sub_container}>
                        <Image
                            source={require('../../assets/Images/mehndi_design4.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design2.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.images_sub_container}>
                        <Image
                            source={require('../../assets/Images/mehndi_design3.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design4.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.images_sub_container}>
                        <Image
                            source={require('../../assets/Images/mehndi_design3.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design2.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/mehndi_design.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.images_sub}>
                        <View style={styles.images_sub_container}>
                            <Image
                                source={require('../../assets/Images/mehndi_design2.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../assets/Images/mehndi_design4.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../assets/Images/mehndi_design3.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </ScrollView>
        </ScrollView>
    );
};

export default MainProfile;
