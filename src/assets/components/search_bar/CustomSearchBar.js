import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/Color';
import ProfileImage from '../profile/ProfileImage';

const CustomSearchBar = ({ onSearch, onIcon1Press, onIcon2Press, icon1, icon2, isFavoriteScreen }) => {
  const icon2Color = isFavoriteScreen ? 'red' : 'black';
  const navigation = useNavigation();

  const handleBarsIconPress = () => {
    navigation.navigate('Setting');
  };

  const handleBellIconPress = () => {
    navigation.navigate('Notifications');
  };

  const handlePlusIconPress = () => {
    navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <ProfileImage />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onIcon1Press} style={styles.Icon_conatiner}>
            <AntDesign name='search1' size={19} style={styles.back_Icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlusIconPress} style={styles.Icon_conatiner}>
            <Feather name='plus' size={27} style={[styles.back_Icon, { color: icon2Color }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBellIconPress} style={styles.Icon_conatiner}>
            <MaterialCommunityIcons name='bell-ring-outline' size={20} style={[styles.back_Icon, { color: icon2Color }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBarsIconPress} style={styles.Icon_conatiner}>
            <FontAwesome6 name="bars" size={19} style={[styles.back_Icon, { color: icon2Color }]} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line_style}/>
    </View>
  );
};


export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Icon_conatiner: {
    backgroundColor: colors.seprator,
    marginLeft: 8,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back_Icon: {
    color: colors.BLACK,
  },
  sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 75,
    alignItems:'center',
    paddingLeft:20,
    paddingRight:12
  },
  iconContainer: {
    flexDirection: 'row',
  },
  line_style:{
    width:'100%',
    height:1,
    backgroundColor:colors.DividingLine
  }

});
