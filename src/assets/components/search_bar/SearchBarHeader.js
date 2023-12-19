import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const SearchBarHeader = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(true);
  
    const handleFocus = () => {
      setIsSearchFocused(false);
    };
  
    const handleBlur = () => {
      setIsSearchFocused(true);
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={27} color="black" style={styles.bars_Icon} />
        </TouchableOpacity>
        <View style={styles.name_container}>
          <View style={styles.search_container}>
            <FontAwesome name="search" size={17} style={styles.search_Icon} />
            <TextInput
              style={styles.search_Input}
              placeholder="Search"
              placeholderTextColor="#888"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>
          {/* Add the button here */}
          {!isSearchFocused && (
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          )}
          {/* End of button */}
        </View>
      </View>
    </View>
  );
};

export default SearchBarHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    bars_Icon: {
        padding: 4,
        borderRadius: 25,
        backgroundColor: colors.seprator,
        width: 37,
        height: 37,
    },
    name_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    name_style: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    search_Input: {
        width: 180,
        fontSize: 12,
        padding: 5,
        backgroundColor: colors.seprator,
        borderRadius: 25,
        color: colors.BLACK,
    },
    iconContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    Icon_conatiner: {
        backgroundColor: colors.seprator,
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
        width: '78%',
        backgroundColor: colors.seprator,
        height: 37,
    },
    search_Icon: {
        color: colors.DividingLine,
    },
    buttonContainer: {
        // marginLeft: 10,
        backgroundColor: colors.orange_color,
        borderRadius: 25,
        width: '33%',
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        right:2
    },
    buttonText: {
        color: colors.BLACK,
        fontSize:12
    },
});
