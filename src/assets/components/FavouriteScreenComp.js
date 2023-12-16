// CategoriesDesign.js
import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/Color';

const FavouriteScreenComp = ({ backgroundImage, title, isFavoriteScreen }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('PostImage');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.image_container}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.background_Image}
                    resizeMode="cover"
                >
                    <View style={styles.color} />
                    <View style={styles.icons_Container}>
                        <TouchableOpacity>
                            <SimpleLineIcons name="cloud-download" size={13} color="black" style={styles.icon_style} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="select-compare" size={13} color="black" style={styles.icon_style} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="sharealt" size={13} color="black" style={styles.icon_style} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="heart" size={13} color={'red'} style={styles.icon_style} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background_Image: {
        width: '100%',
        height: 155,
    },
    color: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 168,
        height: 28,
    },
    icons_Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 90,
        width: 145,
        marginLeft: 12
    },
    text: {
        fontSize: 10,
        color: colors.BLACK,
    },
    icon_style: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 6,
        borderRadius: 20
    }
});

export default FavouriteScreenComp;
