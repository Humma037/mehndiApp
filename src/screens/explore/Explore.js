import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import Categories from '../../assets/components/Categories';
import Carousel from '../../assets/components/Carousel';
import colors from '../../assets/theme/Color';

const Explore = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('MainProfile');
  };

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleheartButtonPress = () => {
    navigation.navigate('Favourites');
  };

  const data = [
    { id: 1, image: require('../../assets/Images/group_image.webp') },
    { id: 2, image: require('../../assets/Images/group_image.webp') },
    { id: 3, image: require('../../assets/Images/group_image.webp') },
  ];

  return (
    <View Style={styles.container}>
      <View style={styles.sub_container}>
        <TouchableOpacity >
          <ProfileImage onPress={handleImagePress} style={styles.Profile_Image} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View style={styles.search_container}>
            <FontAwesome name="search" size={15} style={styles.search_Icon} />
            <TextInput
              style={styles.search_Input}
              placeholder="Search"
              placeholderTextColor="#888"
            // onChangeText={onSearch}
            />
          </View>
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleheartButtonPress} style={styles.heart_Icon_container}>
            <FontAwesome name="heart-o" size={19} style={styles.heart_Icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.image_Container}>
          <Text style={styles.text_style}>Latest Trending Designs</Text>
          <View style={styles.slide_Container}>
            <Carousel data={data} />
          </View>
          <ImageBackground
            source={require('../../assets/Images/group_image.webp')}
            style={styles.image_style}
            resizeMode="cover"
          />
        </View>

        {/* Scrollable content section */}
        <ScrollView>
          <View style={styles.catgories_style}>
            <View style={styles.heading_second}>
              <Text style={styles.heading_all_categories}>All Categories</Text>
            </View>

            {/* Categories section */}
            {/* Row 1 */}
            <View style={styles.catgories_image_container}>
              <View style={styles.catgories_image_sub_container}>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Row 2 */}
              <View style={styles.catgories_image_sub_container}>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/mehndi_design.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Style" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Row 3 */}
              <View style={styles.catgories_image_sub_container}>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                  <View style={styles.catgories_margin}>
                    <Categories backgroundImage={require('../../assets/Images/images_mehndi.jpg')} title="Mehndi Designs" />
                  </View>
                </TouchableOpacity>
              </View>
              {/* row 4 */}
              <View style={styles.last_catgorie_container}>
                <View style={styles.catgories_image_sub_container}>
                  <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                    <View style={styles.catgories_margin}>
                      <Categories backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Mehndi Designs" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                    <View style={styles.catgories_margin}>
                      <Categories backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

    </View >
  );
};

export default Explore;
