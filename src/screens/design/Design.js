import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground , TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import CategoriesHeader from '../../assets/components/custom_hearder/CategoriesHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoriesDesign from '../../assets/components/CategoriesDesign';

const Design = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  // const handleIcon1Press = () => {
  //   navigation.navigate('Explore');
  // };

  const handleHeartButtonPress = () => {
    navigation.navigate('Favourites');
  };

  const handleBackButtonPress = () => {
    navigation.navigate('Explore');
  };

  return (
    <View Style={styles.container}>
      <View style={styles.sub_container}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.back_button_container}>
          <FontAwesome name="angle-left" size={30} style={styles.back_button}/>
        </TouchableOpacity>
        <View style={styles.search_container}>
          <FontAwesome name="search" size={15} style={styles.search_Icon} />
          <TextInput
            style={styles.search_Input}
            placeholder="Search"
            placeholderTextColor="#888"
            // onChangeText={onSearch}
          />
        </View>
        <TouchableOpacity onPress={handleHeartButtonPress} style={styles.heart_Icon_container}>
          <FontAwesome name="heart-o" size={19} style={styles.heart_Icon}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.image_Container}>
          <Text style={styles.text_style}>Mehndi Designs</Text>
          <ImageBackground
            source={require('../../assets/Images/group_image.webp')}
            style={styles.image_style}
            resizeMode="cover"
          />
        </View>

        {/* Scrollable content section */}
        <View style={styles.catgories_style}>
          <View style={styles.heading_second}>
            <Text style={styles.heading_all_design}>All Designs</Text>
          </View>

          {/* Categories section */}
          {/* Row 1 */}
          <View style={styles.catgories_container}>
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 2 */}
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/images_mehndi.jpg')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 3 */}
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>
            {/* row 4 */}
            <View style={styles.last_catgories_container}>
              <View style={styles.catgories_image_sub_container}>
                <TouchableOpacity>
                  <View style={styles.catgories_margin}>
                    <CategoriesDesign backgroundImage={require('../../assets/Images/images_mehndi.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.catgories_margin}>
                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Hair Style" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Design;
