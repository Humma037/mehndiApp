import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import OpenImageHeader from '../../assets/components/custom_hearder/OpenImageHeader'
import styles from './Style'
import PostImageFooter from '../../assets/components/PostImageFooter'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const PostImage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <OpenImageHeader
                navigation={navigation}
                name="Lady’s Image"
                icon="cross"
                backgroundColor="black"
                iconBackgroundColor="#333232"
                headerBackgroundColor="black"  
                headerMainBackgroundColor="black"         
                 />
            <View style={styles.images_sub_container}>
                <Image
                    source={require('../../assets/Images/OpenImage.png')}
                    resizeMode="cover"
                    style={styles.PostImage}
                />
            </View>
            <View style={styles.PostImageFooter}>
                <View style={styles.data_container}>
                    <View>
                        <Text style={styles.name_heading}>Lady Gaga</Text>
                        <Text style={styles.time_style}>32 min ago</Text>
                    </View>
                    <View>
                        <Text style={styles.text_styling}>1.1K Peoples Like this post</Text>
                    </View>
                </View>


                <View style={styles.container_post_Button}>
                    <TouchableOpacity >
                        <View style={styles.post_Button}>
                            <PostImageFooter
                                // onPress={handleLikeButtonPress}
                                iconComponent={<FontAwesome name="thumbs-o-up" size={13} color="white" />}
                                buttonText="1.1k"
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.post_Button}>
                        <PostImageFooter
                            // onPress={handleCommentButtonPress}
                            iconComponent={<AntDesign name="message1" size={13} color="white" />}
                            buttonText="234"
                        />
                    </View>
                    <View style={styles.post_Button}>
                        <PostImageFooter
                            // onPress={handleCompareButtonPress}
                            iconComponent={<MaterialCommunityIcons name="select-compare" size={13} color="white" />}
                            buttonText="34"
                        />
                    </View>
                    <View style={styles.post_Button}>
                        <PostImageFooter
                            // onPress={handleCompareButtonPress}
                            iconComponent={<SimpleLineIcons name="cloud-download" size={13} color="white" />}
                            buttonText="22"
                        />
                    </View>
                </View>
            </View>
        </View>

    )
}

export default PostImage

