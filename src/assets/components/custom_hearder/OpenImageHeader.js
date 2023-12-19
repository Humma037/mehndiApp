import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const OpenImageHeader = ({ navigation, name, icon, iconColor, nameColor, iconBackgroundColor, headerBackgroundColor, headerMainBackgroundColor }) => (
  <View style={[ { backgroundColor: headerMainBackgroundColor }]}>
    <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name={icon} size={25} style={[styles.bars_Icon, { color: iconColor, backgroundColor: iconBackgroundColor }]} />
      </TouchableOpacity>
      <View style={styles.name_container}>
        <Text style={[styles.name_style, { color: nameColor }]}>{name}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bars_Icon: {
    padding: 4,
    borderRadius: 25,
  },
  name_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name_style: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OpenImageHeader;
