import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Home from '../screens/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Explore from '../screens/explore/Explore';
import colors from '../assets/theme/Color';
import MainProfile from '../screens/main_profile/MainProfile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
        paddingHorizontal:15
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: colors.orange_color,
        tabBarShowLabel: false, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="home" color={color} size={size} />
              <Text style={{ marginLeft: 8, color, fontSize: 13 }}>Home</Text>
            </View>
          ),
          tabBarItemStyle: {
            padding: 13,
          },
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="rocket1" color={color} size={size} />
              <Text style={{ marginLeft: 8, color, fontSize: 13 }}>Explore</Text>
            </View>
          ),
          tabBarItemStyle: {
            padding: 13,
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={MainProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="user-o" color={color} size={size} />
              <Text style={{ marginLeft: 8, color, fontSize: 13 }}>Profile</Text>
            </View>
          ),
          tabBarItemStyle: {
            padding: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
