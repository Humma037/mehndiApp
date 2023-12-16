import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/Color';

const Categories = ({ backgroundImage, title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Design');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={backgroundImage}
        style={styles.background_Image}
        resizeMode="cover"
      />

      {/* Icons */}
      <View style={styles.icons_Container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_Image: {
    width: 165,
    height: 150,
    position: 'absolute',
  },
  icons_Container: {
    flex: 1,
    // paddingHorizontal: 15,
    marginTop: 120,
    width: 165,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 30,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: colors.BLACK,
    // marginTop: 5,
  },
});

export default Categories;
