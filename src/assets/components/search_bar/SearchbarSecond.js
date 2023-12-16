import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../theme/Color';
import { useNavigation } from '@react-navigation/native';
import ProfileImage from '../profile/ProfileImage';

const CustomButton = ({ onPress, iconName, buttonText, iconColor, buttonColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button]}>
    <EvilIcons name={iconName} size={25} color={iconColor} style={styles.icon} />
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const SearchbarSecond = ({ onSearch, onIcon1Press, onIcon2Press }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('UploadPhoto');
  };

  const handleProfileImagePress = () => {
    navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <TouchableOpacity onIcon2Press={handleProfileImagePress} style={styles.ProfileImage} >
          <ProfileImage />
        </TouchableOpacity>
        <View style={styles.sub_container}>
          <TextInput
            style={styles.search_Input}
            placeholder="Write Something..."
            onChangeText={(text) => onSearch(text)}
            placeholderTextColor={colors.DividingLine}
          />
          <CustomButton
            onPress={handleButtonPress}
            iconName="image"
            buttonText="Upload"
            iconColor={colors.customIconColor}
            buttonColor='#A6A6A6'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    height: 35,
    width: 180,
    fontSize: 11,
    paddingHorizontal: 10,
    backgroundColor: colors.seprator,
    color: colors.BLACK,
    borderRadius: 25,
    padding: 5
  },
  sub_container: {
    flexDirection: 'row',
    width:'80%'
    // marginLeft: 15,
  },
  searchbar_style: {
    flexDirection: 'row',
    // margin: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  button: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.seprator,
    height: 35,
    marginLeft: 4
  },
  icon: {
    marginRight: 2,
    color: colors.BLACK,
  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 10,
    paddingRight: 3
  },
  ProfileImage: {
  }
});

export default SearchbarSecond;
