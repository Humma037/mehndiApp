import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../theme/Color';
import ProfileImage from '../profile/ProfileImage';

const CustomSearchBar = ({ onSearch, onIcon1Press, onIcon2Press, icon1, icon2, isFavoriteScreen }) => {
  const icon2Color = isFavoriteScreen ? 'red' : 'black';
  const navigation = useNavigation();
  const refRBSheet = useRef();

  const handleBarsIconPress = () => {
    navigation.navigate('Setting');
  };

  const handleBellIconPress = () => {
    navigation.navigate('Notifications');
  };

  const handlePlusIconPress = () => {
    refRBSheet.current.open();
  };

  const handleSearchIconPress = () => {
    navigation.navigate('SearchBar');
  };

  const handlePhotoIconPress = () => {
    navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <ProfileImage />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleSearchIconPress} style={styles.Icon_conatiner}>
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
      <View style={styles.line_style} />

      {/* RBSheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={270}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: colors.DividingLine,
            // marginTop: 10,
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          },
        }}
      >
        {/* Heading inside RBSheet */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Choose an action</Text>
        </View>

        {/* Your RBSheet content goes here */}
        <View style={styles.contentContainer}>
          {/* Box 1 */}
          <TouchableOpacity style={styles.boxContainer}>
            <SimpleLineIcons name="camera" size={35} style={styles.boxIcon} />
            <Text style={[styles.boxText, styles.underlinedText]}>Capture Photo</Text>
          </TouchableOpacity>

          {/* Box 2 */}
          <TouchableOpacity style={styles.boxContainer} onPress={handlePhotoIconPress}>
            <Ionicons name="images-outline" size={35} style={styles.boxIcon} />
            <Text style={[styles.boxText, styles.underlinedText]}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

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
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 12,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  line_style: {
    width: '100%',
    height: 1,
    backgroundColor: colors.DividingLine,
  },
  headingContainer: {
    paddingVertical: 5,
  },
  headingText: {
    color: colors.BLACK,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.seprator,
    width: '45%',
    height: 120,
    borderRadius: 20,
  },
  boxIcon: {
    marginBottom: 10,
    color: colors.BLACK,
  },
  boxText: {
    fontSize: 13,
    color: colors.BLACK,
  },
  underlinedText: {
    borderBottomWidth: 1, 
  },
});

export default CustomSearchBar;
