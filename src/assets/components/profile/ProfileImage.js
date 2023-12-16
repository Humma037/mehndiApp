import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';
import { useNavigation } from '@react-navigation/native';


const ProfileImage = () => {
  const navigation = useNavigation();

  const handleProfileImagePress = () => {
    navigation.navigate('MainProfile');
  };
  return (
    <View>
      {/* <FontAwesome name="user" size={17} style={styles.user_Icon} /> */}
      <TouchableOpacity onPress={handleProfileImagePress}>
      <Image
        source={require('../../Images/Hijab-Dp.jpg')}
        style={styles.user_Icon}
        resizeMode="cover"
      />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
  user_Icon: {
    width: 45,
    height: 45,
    // backgroundColor: colors.seprator,
    // paddingHorizontal: 13,
    // paddingVertical: 8,
    borderRadius: 50,
    // color: colors.DividingLine,
  }
})