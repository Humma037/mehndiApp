import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FollowersComp from '../../assets/components/FollowersComp';
import colors from '../../assets/theme/Color';
import { useNavigation } from '@react-navigation/native';

const Following = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <SecondHeader navigation={navigation} name="Compares" icon="angle-left" />
            <ScrollView>
                <View style={styles.sub_container}>
                    <View style={styles.notification}>
                        <View style={styles.data_container}>
                            <Text style={styles.text_heading}>Compares</Text>
                            <Text style={styles.text}>1.1k Compares</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.second_sub_container}>
                    <View style={styles.notification}>
                        <View style={styles.this_week_notification}>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white}button1Text="Message" button2Text="View Post" />
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                            <View style={styles.notification_details}>
                                <FollowersComp activeColor={colors.light_white} button1Text="Message" button2Text="View Post"/>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Following

