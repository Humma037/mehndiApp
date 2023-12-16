import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../theme/Color';

const PostSetting = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.modalContent}>
            <View style={styles.ViewContent}>
                <View style={styles.text_container}>
                    <Feather name="bookmark" size={20} style={styles.icon_image} />
                    <Text style={styles.Text}>Save</Text>
                </View>
                <View style={styles.text_container}>
                    <Entypo name="share" size={20} style={styles.icon_image} />
                    <Text style={styles.Text}>Share via</Text>
                </View>
                <View style={styles.text_container}>
                    <Entypo name="eye-with-line" size={20} style={styles.icon_image} />
                    <Text style={styles.Text}>I don't want to see this</Text>
                </View>
                <View style={styles.text_container}>
                    <Entypo name="circle-with-cross" size={20} style={styles.icon_image} />
                    <Text style={styles.Text}>Unfollow Lady Gaga</Text>
                </View>
                <View style={styles.text_container}>
                    <Entypo name="flag" size={20} style={styles.icon_image} />
                    <Text style={styles.Text}>Report this</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text_container: {
        flexDirection: 'row',
        marginLeft: 5,
        marginBottom: '7%',
    },
    Text: {
        color: '#606060',
        fontSize: 12,
        marginLeft: 10
    },
    icon_image: {
        color: '#606060'
    },
    close_modal: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_style: {
        backgroundColor: colors.DividingLine,
        padding: 3,
        width: 45,
        borderRadius: 5
    }
});

export default PostSetting;