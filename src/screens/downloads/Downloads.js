import React from 'react';
import { ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoriesDesign from '../../assets/components/CategoriesDesign';

const Downloads = () => {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('Search:', text);
    };

    const handleIcon2Press = () => {
        navigation.navigate('Setting');
    };

    return (
        <View Style={styles.container}>
            <View style={styles.header_container}>
                <View style={styles.header_sub_container}>
                    <TouchableOpacity onPress={handleIcon2Press}>
                        <FontAwesome name="angle-left" size={30} style={styles.bars_Icon} />
                    </TouchableOpacity>
                    {/* <View style={{flexDirection:'row'}}> */}
                        <View style={styles.searchbar_style}>
                            <FontAwesome name="search" size={14} style={styles.search_Icon} />
                            <TextInput
                                style={styles.search_Input}
                                placeholder="Search"
                                placeholderTextColor='#A6A6A6'
                            // onChangeText={(text) => onSearch(text)}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.Filter_button}>
                                <Text style={styles.Filter_button_text}>Filter</Text>
                                <AntDesign name="filter" size={14} style={styles.filter_Icon} color='black'/>
                            </View>
                        </TouchableOpacity>
                    {/* </View> */}
                </View>
            </View>
            <ScrollView>
                {/* Scrollable content section */}
                <ScrollView style={styles.catgories_style}>
                    <View style={styles.heading_second}>
                        <Text style={styles.heading_all_design}>Downloads</Text>
                    </View>

                    {/* Row 1 */}
                    <View style={styles.catgories_image_container}>
                        <View style={styles.catgories_image_sub_container}>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design.jpg')} title="Mehndi Designs" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Hair Style" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Row 2 */}
                        <View style={styles.catgories_image_sub_container}>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Hair Style" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Row 3 */}
                        <View style={styles.catgories_image_sub_container}>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design.jpg')} title="Mehndi Designs" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Hair Style" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.last_catgories_container}>
                            <View style={styles.catgories_image_sub_container}>
                                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                    <View style={styles.catgories_margin}>
                                        <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design.jpg')} title="Mehndi Designs" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                    <View style={styles.catgories_margin}>
                                        <CategoriesDesign backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Hair Style" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default Downloads;
