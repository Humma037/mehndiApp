import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FollowersComp from '../../assets/components/FollowersComp';
import colors from '../../assets/theme/Color';
import { useNavigation } from '@react-navigation/native';
import MainStyles from '../../assets/styles/MainStyles';
import Entypo from 'react-native-vector-icons/Entypo';

const Following = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <SecondHeader navigation={navigation} name="Following" icon="angle-left" />
            <ScrollView>
                <View style={styles.sub_container}>
                    {/* <View style={styles.notification}>
                        <View style={styles.data_container}>
                            <Text style={styles.text_heading}>New</Text>
                            <Text style={styles.text}>You have 2 new notifications!</Text>
                        </View>
                        <View style={styles.notification_container}>
                            <View style={MainStyles.Direction_Horizental}>
                                <View style={styles.notification_dont} />
                                <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.dimiss_icon_container}>
                                <Entypo name="cross" size={18} color="black" style={styles.dimiss_icon} />
                            </TouchableOpacity>
                            <View style={MainStyles.Direction_Horizental}>
                                <View style={styles.notification_dont} />
                                <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.dimiss_icon_container}>
                                <Entypo name="cross" size={18} color="black" style={styles.dimiss_icon} />
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
                <View style={styles.second_sub_container}>
                    <View style={styles.notification}>
                        <View style={styles.data_container}>
                            <Text style={styles.text_heading}>All</Text>
                            <Text style={styles.text}>1.1k Followings</Text>
                        </View>
                        <View style={styles.this_week_notification}>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                            <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="Unfollow"/>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Following

