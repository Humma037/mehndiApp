import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader';
import styles from './Style';
import LikesComp from '../../assets/components/LikesComp';
import { useNavigation } from '@react-navigation/native';

const Likes = () => {
    const navigation = useNavigation({navigation});

    return (
        <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Likes" icon="angle-left" />
            <View style={styles.second_sub_container}>
                <ScrollView style={styles.notification}>
                    <View style={styles.data_container}>
                        <Text style={styles.text_heading}>Likes</Text>
                        <Text style={styles.text}>1.1k Likes</Text>
                    </View>
                    <View style={styles.this_week_notification}>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Likes

