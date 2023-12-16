import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const SettingDropDown = ({ heading, gearIcon, buttonData, initiallyExpanded }) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  useEffect(() => {
    setExpanded(initiallyExpanded);
  }, [initiallyExpanded]);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={MainStyles.Direction_Horizental}>
          <Feather name={gearIcon} size={30} color="black" style={styles.icon} />
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <TouchableOpacity onPress={toggleDropdown}>
          <FontAwesome
            name={expanded ? 'angle-up' : 'angle-down'}
            size={30}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.line_horizental} />
      {expanded && (
        <View style={styles.dropdown_Content}>
          {buttonData.map((button, index) => {
            let IconComponent = FontAwesome;
            switch (button.iconLibrary) {
              case 'AntDesign':
                IconComponent = AntDesign;
                break;
              case 'Ionicons':
                IconComponent = Ionicons;
                break;
              case 'MaterialCommunityIcons':
                IconComponent = MaterialCommunityIcons;
                break;
              case 'MaterialIcons':
                IconComponent = MaterialIcons;
                break;
              case 'EvilIcons':
                IconComponent = EvilIcons;
                break;
              case 'Feather':
                IconComponent = Feather;
                break;
              case 'Entypo':
                IconComponent = Entypo;
                break;
              case 'SimpleLineIcons':
                IconComponent = SimpleLineIcons;
                break;
              default:
                break;
            }

            return (
              <TouchableOpacity key={index} style={styles.dropdown_Button}>
                <IconComponent
                  name={button.icon}
                  size={22}
                  color="black"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.seprator,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop:5
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginRight: '10%',
    marginTop:6
  },
  line_horizental: {
    width: '100%',
    height: 1,
    backgroundColor: colors.themeLightGrey,
    marginVertical: 10
  },
  dropdown_Content: {
    marginTop: 10,
  },
  dropdown_Button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#f2eded'
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 13,
    color: 'black',
  },
});

export default SettingDropDown;
