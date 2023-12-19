import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../theme/Color';

const UndefineUser = () => {
    const handleButtonPress = () => {
    };

    return (
        <View style={styles.Container}>
            <View style={styles.textAndButtonContainer}>
                <View style={styles.data_Container}>
                    <MaterialCommunityIcons name="progress-clock" size={37} style={styles.clock_Icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text_heading}>Mister Perfect</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                            <Entypo name="cross" color='#333232' size={30} style={styles.cross_Icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UndefineUser;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    data_Container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textAndButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    textContainer: {
        marginHorizontal: 10,
    },
    clock_Icon: {
        width: 50,
        height: 50,
        backgroundColor: colors.seprator,
        paddingHorizontal: 7,
        paddingVertical: 6,
        borderRadius: 50,
        color: colors.light_black,
    },
    text_heading: {
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.light_black,
    },

});
