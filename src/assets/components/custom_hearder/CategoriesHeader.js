import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/Color';

const CategoriesHeader = ({ onSearch, onIcon1Press, icon1, iconColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <View style={styles.search_container}>
          <FontAwesome name="search" size={13} style={styles.search_Icon} />
          <TextInput
            style={styles.search_Input}
            placeholder="Search"
            placeholderTextColor="#888"
            onChangeText={onSearch}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onIcon1Press} style={styles.Icon_conatiner}>
            <FontAwesome name={icon1} size={18} style={[styles.back_Icon, { color: iconColor }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoriesHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    width: 180,
    fontSize: 11,
    padding: 5,
    backgroundColor: colors.seprator,
    borderRadius: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  searchbar_style: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  Icon_conatiner: {
    backgroundColor: colors.seprator,
    marginLeft: 5,
    padding: 9,
    borderRadius: 20,
  },
  back_Icon: {
    color: colors.BLACK,
  },
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: 230,
    backgroundColor: colors.seprator,
    height: 36.5,
    marginRight: 18,
  },
  search_Icon: {
    color: colors.DividingLine,
  },
});
