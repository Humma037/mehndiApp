import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, AppState } from 'react-native';
import Home from '../screens/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Explore from '../screens/explore/Explore';
import colors from '../assets/theme/Color';
import MainProfile from '../screens/main_profile/MainProfile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomBar = ({ route }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [appState, setAppState] = useState('active');

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    setActiveTab(routeName);

    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);
    };

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      appStateSubscription.remove();
    };
  }, [route]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 25,
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: colors.BLACK,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: activeTab === 'Home' ? 'Home' : null,
          tabBarIcon: ({ color, size }) => (
            <View style={{ backgroundColor: appState === 'active' && activeTab === 'Home' ? '#FDD9A4' : 'transparent',
            width:'135%', height:42 , alignItems:'center',justifyContent:'center', borderRadius:25
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="home" color={color} size={size} />
                {activeTab === 'Home' && (
                  <Text style={{ marginLeft: 5, color, fontSize: 13}}>
                    Home
                  </Text>
                )}
              </View>
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
          tabBarLabel: activeTab === 'Contact' ? 'Explore' : null,
          tabBarIcon: ({ color, size }) => (
            <View style={{ backgroundColor: appState === 'active' && activeTab === 'Contact' ? '#FDD9A4' : 'transparent',
            width:'135%', height:42 , alignItems:'center',justifyContent:'center', borderRadius:25
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="rocket1" color={color} size={size} />
                {activeTab === 'Contact' && (
                  <Text style={{ marginLeft: 5, color, fontSize: 13}}>
                    Explore
                  </Text>
                )}
              </View>
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
          tabBarLabel: activeTab === 'User' ? 'Profile' : null,
          tabBarIcon: ({ color, size }) => (
            <View style={{ backgroundColor: appState === 'active' && activeTab === 'User' ? '#FDD9A4' : 'transparent', 
            width:'135%', height:42 , alignItems:'center',justifyContent:'center', borderRadius:25  }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="user-o" color={color} size={size} />
                {activeTab === 'User' && (
                  <Text style={{ marginLeft: 5, color, fontSize: 13,  }}>
                    Profile
                  </Text>
                )}
              </View>
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
