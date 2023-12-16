import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const SecondHeader = ({ navigation, name, icon }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name={icon} size={30} style={styles.bars_Icon} />
    </TouchableOpacity>
    <View style={styles.name_container}>
    <Text style={styles.name_style}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    height:60,
  },
  bars_Icon: {
    backgroundColor: colors.orange_color,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 25,
    color: colors.white,
    position: 'absolute',
    left: 25,
    top:13,
    width:34,
    height:34
  },
  name_container:{
    alignItems:'center',
    justifyContent:'center',
    height:60
  },
  name_style: {
    fontWeight: 'bold',
    color: colors.BLACK,
    fontSize: 16,
    // lineHeight:22
  },
});

export default SecondHeader;
