import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/Color';

const CustomHeader = ({ navigation }) => (
    <View style={styles.header}>
        <AntDesign name="left" size={15} onPress={() => navigation.goBack()} style={styles.icon_style} />
        <View style={styles.image_style}>
            <Image
                source={require('../../Images/Logo.png')}
                style={styles.logo_style}
                resizeMode="cover"
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 110,
        paddingHorizontal:'8%',
    },
    image_style: {
        alignItems: 'center',
        justifyContent:'center',
        width: '85%',
    },
    icon_style: {
        backgroundColor: colors.orange_color,
        padding: 9,
        borderRadius: 20,
        color: colors.white,
    }
});

export default CustomHeader;
