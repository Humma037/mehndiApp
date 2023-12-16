import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import Notification from '../../assets/components/NotificationComp';
import { useNavigation } from '@react-navigation/native';
import MainStyles from '../../assets/styles/MainStyles';
import Entypo from 'react-native-vector-icons/Entypo';

const Notifications = () => {
  const navigation = useNavigation({ navigation });

  return (
    <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Notifications" icon="angle-left" />
      <ScrollView>
        <View style={styles.sub_container}>
          <View style={styles.notification_container}>
            <Text style={styles.text}>You have 2 new notifications!</Text>
            <Text style={styles.text_heading}>Today</Text>
            <View style={MainStyles.Direction_Horizental}>
              <View style={styles.notification_dont} />
              <View style={styles.notification_details}>
                <Notification />
              </View>
            </View>
            <TouchableOpacity style={styles.dimiss_icon_container}>
              <Entypo name="cross" size={18} color="black" style={styles.dimiss_icon} />
            </TouchableOpacity>
            <View style={MainStyles.Direction_Horizental}>
              <View style={styles.notification_dont} />
              <View style={styles.notification_details}>
                <Notification />
              </View>
            </View>
            <TouchableOpacity style={styles.dimiss_icon_container}>
              <Entypo name="cross" size={18} color="black" style={styles.dimiss_icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.second_sub_container}>
            <View style={styles.notification}>
              <Text style={styles.text_heading}>This Week</Text>
              <ScrollView style={styles.this_week_notification}>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
                <View style={styles.notification_details}>
                  <Notification />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Notifications

