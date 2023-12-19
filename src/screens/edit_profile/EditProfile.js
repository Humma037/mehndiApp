import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [confirmName, setConfirmName] = useState('');
    const [bio, setBio] = useState('');
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = async (buttonNumber) => {
        try {
            if (buttonNumber === 1) {
                // Update the name in the 'users' collection
                const userId = auth().currentUser ? auth().currentUser.uid : null;
                if (userId) {
                    await firestore().collection('users').doc(userId).update({
                        Name: name,
                    });
                    console.log('Name updated successfully');
                    Alert.alert('Success', 'Name updated successfully');
                }

                // Update or add the bio in the 'user_bios' collection
                await firestore().collection('user_bios').doc(userId).set({
                    bio: bio,
                }, { merge: true });
                console.log('Bio updated successfully');
                Alert.alert('Success', 'Bio updated successfully');
            }
            setActiveButton(buttonNumber);
        } catch (error) {
            console.error('Error updating data:', error);
            Alert.alert('Error', 'Failed to update data. Please try again.');
        }
    };

    useEffect(() => {
        // Fetch current user data and set the name and bio in the input fields
        const fetchUserData = async () => {
            try {
                const userId = auth().currentUser ? auth().currentUser.uid : null;
                if (userId) {
                    const userDoc = await firestore().collection('users').doc(userId).get();
                    const userData = userDoc.data();
                    setName(userData.Name || '');

                    // Fetch user bio from the new 'user_bios' collection
                    const bioDoc = await firestore().collection('user_bios').doc(userId).get();
                    const bioData = bioDoc.data();
                    setBio(bioData ? bioData.bio : '');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View style={[styles.container, styles.screenContainer]}>
            <View style={{ height: 70 }}>
                <SecondHeader navigation={navigation} name="Edit Profile" icon="angle-left" />
            </View>
            <View style={styles.sub_Container}>
                <Text style={styles.text_style}>Change Name</Text>
                <View style={styles.line_style} />
                <View style={styles.inputContainer}>
                    <View style={styles.input_sub_Container}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholderTextColor="#A6A6A6"
                        />
                    </View>
                    <View style={[styles.input_sub_Container, styles.marginBetweenInputs]}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm Name"
                            value={confirmName}
                            onChangeText={(text) => setConfirmName(text)}
                            placeholderTextColor="#A6A6A6"
                        />
                    </View>
                </View>

                {/* HorizontalButtons */}
                <View style={styles.button_container}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 2 && styles.activeButton,
                            activeButton === 2 && { borderWidth: 0.5, borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(2)}
                    >
                        <Text style={[styles.buttonText, activeButton === 2 && styles.activeButtonText]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 1 && styles.activeButton,
                            activeButton === 1 && { borderWidth: 0.5, borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(1)}
                    >
                        <Text style={[styles.buttonText, activeButton === 1 && styles.activeButtonText]}>Update</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.Boi_text_style}>Change Bio</Text>
                <View style={styles.line_style} />
                <View style={styles.inputContainer}>
                    <View style={styles.Bioinput_sub_Container}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Bio"
                            value={bio}
                            onChangeText={(text) => setBio(text)}
                            placeholderTextColor="#A6A6A6"
                            multiline
                            minHeight={40} 
                            maxHeight={200} 
                        />
                    </View>
                </View>

                {/* HorizontalButtons */}
                <View style={styles.button_container}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 2 && styles.activeButton,
                            activeButton === 2 && { borderWidth: 0.5, borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(2)}
                    >
                        <Text style={[styles.buttonText, activeButton === 2 && styles.activeButtonText]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 1 && styles.activeButton,
                            activeButton === 1 && { borderWidth: 0.5, borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(1)}
                    >
                        <Text style={[styles.buttonText, activeButton === 1 && styles.activeButtonText]}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EditProfile;
