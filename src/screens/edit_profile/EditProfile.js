// EditProfile.js

import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader';

const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [confirmName, setConfirmName] = useState('');

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

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
                            value={name}
                            onChangeText={(text) => setName(text)}
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
            </View>
        </View>

        // </View>
    );
};

export default EditProfile;
