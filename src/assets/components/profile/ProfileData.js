import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';
import PostButton from '../reusable_buttons/PostButton';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../BottomSheet';
import PostBottomSheet from '../../components/PostBottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import CommentsComp from '../CommentsComp'
import ReplyBottomSheet from '../ReplyBottomSheet';

const ProfileData = () => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [PostbottomSheetVisible, setPostBottomSheetVisible] = useState(false);
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const [replyBottomSheetVisible, setReplyBottomSheetVisible] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const textDescription = `Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof.`;

    const truncatedText = showFullDescription ? textDescription : `${textDescription.slice(0, 45)}...`;
    const toggleReplyBottomSheet = () => {
        setReplyBottomSheetVisible(!replyBottomSheetVisible);
    };

    const handleThreeDotsPress = () => {
        toggleReplyBottomSheet();
    };

    const togglePostBottomSheet = () => {
        setPostBottomSheetVisible(!PostbottomSheetVisible);
    };
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!bottomSheetVisible);
    };

    const openBottomSheet = () => {
        refRBSheet.current.open();
    };

    const navigation = useNavigation();

    const handleLikeButtonPress = () => {
        navigation.navigate('Likes');
    };
    const handleCommentPress = () => {
        navigation.navigate('Comments');
    };
    const handleCompareButtonPress = () => {
        navigation.navigate('Compares');
    };
    const handleProfileImagePress = () => {
        navigation.navigate('Profile');
    };
    const handlePostImagePress = () => {
        navigation.navigate('PostImage');
    };


    return (
        <View style={styles.Container}>
            <View style={styles.data_direction}>
                <View style={MainStyles.Direction_Horizental}>
                    <TouchableOpacity onPress={handleProfileImagePress}>
                        <Image
                            source={require('../../Images/girls-dp.jpeg')}
                            style={styles.user_Icon}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <View style={styles.userData}>
                        <View>
                            <Text style={styles.text_name}>Lady Gaga</Text>
                            <Text style={styles.time_text}>02:23 PM</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.donts_icon} onPress={togglePostBottomSheet}>
                    <PostBottomSheet isVisible={PostbottomSheetVisible} onClose={togglePostBottomSheet} />
                </TouchableOpacity>
            </View>
            {/* description */}
           <Text style={[styles.text_description, { fontSize: 12 }]}>
                {truncatedText}
                {!showFullDescription && (
                    <Text style={{ color: 'black', fontSize: 12 }} onPress={() => setShowFullDescription(true)}> Read More</Text>
                )}
                {showFullDescription && (
                    <Text style={{ color: 'black' }} onPress={() => setShowFullDescription(false)}> Read Less</Text>
                )}
            </Text>
            <TouchableOpacity style={styles.post_image_container} onPress={handlePostImagePress}>
                <View style={styles.post_image}>
                    <Image
                        source={require('../../Images/Featured-Image.jpg')}
                        style={styles.background_Image}
                        resizeMode="cover"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.container_post_Button}>
                <TouchableOpacity>
                    <View style={styles.post_Button}>
                        <PostButton
                            iconComponent={<AntDesign name="like2" size={18} style={styles.icon_image} />}
                            buttonText="1.4k"
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.post_Button}>
                    <PostButton
                        iconComponent={<AntDesign name="message1" size={16} color='black' style={styles.icon_image} />}
                        buttonText="341"
                        onPress={() => refRBSheet2.current.open()}
                    />
                    <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} />
                </View>
                <TouchableOpacity>
                    <View style={styles.post_Button}>
                        <PostButton
                            onPress={handleCompareButtonPress}
                            iconComponent={<MaterialCommunityIcons name="select-compare" size={17} style={styles.icon_image} />}
                            buttonText="234"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
            </RBSheet>

            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={550}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    draggableIcon: {
                        backgroundColor: colors.DividingLine,
                        marginTop: 15
                    },
                    container: {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    },
                }}
            >
                <View contentContainerStyle={{ flexGrow: 1 }}>
                    <Text
                        style={{
                            color: 'black', textAlign: 'center',
                            fontSize: 13, paddingVertical: 15
                        }}
                    >
                        1.1K Peoples Like this post</Text>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '100%' }} />
                    <ScrollView>
                        <View style={{ flexGrow: 1 }}>
                            <TouchableOpacity onPress={handleCommentPress} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 12, paddingBottom: 25 }}>All Comments</Text>
                            </TouchableOpacity>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp />
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp onThreeDotsPress={handleThreeDotsPress} />
                                <ReplyBottomSheet isVisible={replyBottomSheetVisible} onClose={toggleReplyBottomSheet} />
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp onThreeDotsPress={handleThreeDotsPress} />
                                <ReplyBottomSheet isVisible={replyBottomSheetVisible} onClose={toggleReplyBottomSheet} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
        </View>
    );
};

export default ProfileData;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    user_Icon: {
        width: 55,
        height: 55,
        borderRadius: 50,
        margin: 3,
    },
    data_direction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingTop: '4%',
    },
    userData: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: '30%'
    },
    text_name: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginLeft: 5,
    },
    donts_icon: {},
    text_description: {
        fontSize: 11,
        color:colors.light_black,
        // marginLeft: 5,
        width: '100%',
        paddingHorizontal: 25
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
    },
    post_image_container: {
        paddingHorizontal: 23,
    },
    container_post_Button: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '10%',
        marginVertical: 3,
    },
    post_Button: {
        backgroundColor: colors.seprator,
        // paddingHorizontal: 9,
        borderRadius: 12,
    },
    icon_image: {
        color: colors.BLACK,
        marginHorizontal: 3
    },
    background_Image: {
        width: '100%',
        height: 200,
        // backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    comments_container: {
        flexDirection: 'row',
        marginLeft: '16%'
    },
    time_text:{
        color:colors.light_black,
        fontSize:11,
        marginLeft:5,
        marginTop:2
    }
});
