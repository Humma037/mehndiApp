import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const FollowersComp = ({ activeColor }) => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    return (
        <View style={styles.Container}>
            <View style={styles.textAndButtonContainer}>
                <View style={styles.user_profile}>
                    <FontAwesome name="user" size={30} style={styles.user_Icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Lady Gaga</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Tellus pulvinar .</Text>
                </View>
            </View>
        </View>
    );
};

export default FollowersComp;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textAndButtonContainer: {
        width:'87%',
        flexDirection: 'row',
        backgroundColor: '#f4f4f4',
        height:70,
        marginVertical:8,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15
    },
    user_Icon: {
        width: 50,
        height: 50,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 50,
        color: colors.DividingLine,
    },
    text_heading: {
        fontWeight: 'bold',
        fontSize: 11,
        color: colors.light_black,
    },
    text: {
        fontSize: 10,
        color: colors.light_black,
        flexWrap:'wrap',
        width:260
    },
    user_profile: {
        marginRight: 7
    }
});
