import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import SettingDropDown from '../../assets/components/SettingDropDown';
import { Avatar, Cloud_computing, Shuttle, Comments } from '../../assets/svg/index';

const Setting = () => {
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleSettingBarPress = () => {
    navigation.navigate('Home');
  };


  return (
    <View style={styles.Container}>
      {/* bar_Icon */}
      <TouchableOpacity onPress={handleSettingBarPress}>
        <FontAwesome6 name="bars" style={styles.bars_Icon} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.sub_Container}>
          {/* user_profile */}
          <FontAwesome name="user" size={40} style={styles.user_Icon} />
          {/* photo_cover */}
          <View style={styles.cover_photo}>
            <Text style={styles.user_name}>Lady Gaga</Text>
            <Text style={styles.view_profile}>View Profile</Text>
          </View>
        </View>
        {/* setting_options */}
        {/* <ScrollView> */}
        <View style={styles.setting_options_container} >
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons size={30} name='comment-text-multiple-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Downloads')}>
            <Ionicons size={30} name='cloud-download-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Downloads</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <Ionicons size={30} name='images-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons size={30} name='movie-open-play-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Likes')}>
            <AntDesign size={30} name='like2' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Favourites')}>
            <AntDesign size={30} name='hearto' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Followers')}>
            <Ionicons size={30} name='people-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Following')}>
            <MaterialCommunityIcons size={30} name='account-multiple-check-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.compare_category}>
          <TouchableOpacity style={styles.compare_setting_options} onPress={() => navigation.navigate('Compares')}>
            <Ionicons size={30} name='people-outline' style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Compares</Text>
          </TouchableOpacity>
        </View>
        <SettingDropDown
          heading="Settings & Privacy"
          gearIcon="settings"
          buttonData={[
            { text: 'Language', icon: 'language' },
            { text: 'Dark Mode', icon: 'moon-o' },
          ]}
        />
        <SettingDropDown
          heading="Help & Support"
          gearIcon="help-circle"
          initiallyExpanded={isDropdownOpen}
          buttonData={[
            { text: 'Help', icon: 'help-buoy-outline', iconLibrary: 'Ionicons' },
            { text: 'Support', icon: 'customerservice', iconLibrary: 'AntDesign' },
            { text: 'About', icon: 'infocirlceo', iconLibrary: 'AntDesign' },
            { text: 'Report Problem', icon: 'bug-outline', iconLibrary: 'Ionicons' },
          ]}
        />
        <SettingDropDown
          heading="Logout & Delete"
          gearIcon="log-out"
          buttonData={[
            { text: 'Logout', icon: 'power', iconLibrary: 'Feather' },
            { text: 'Delete Account', icon: 'trash-2', iconLibrary: 'Feather' },
          ]}
        />

      </ScrollView>
    </View>
  )
}

export default Setting

