import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {TextInput} from 'react-native';
import HomeScreen from '../../src/views/Home/home';
import ProfileScreen from '../../src/views/profile';
import ShopScreen from '../../src/views/shop';
import SettingScreen from '../../src/views/settings';
import CustomDrawer from '../../src/components/customDrawer';
import SearchBar from '../../src/views/searchBar';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import StackNavigator from './mainNavigator';
import mainStack from './mainNavigator';
import TopTab from './topTabNavigator'
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return <MainDrawer />;
}
function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#F81379',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        overlayColor: '#eee',
        headerTintColor: '#fff',
        // title: 'R 583 Block 14 FB Area, Karachi',
        headerStyle: {
          backgroundColor: '#F81379',
        },
        drawerLabelStyle: {marginLeft: -25, fontSize: 15},
        drawerStyle: {
          width: 310,
        },
      }}>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons color={color} size={22} name="person-outline" />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons color={color} size={22} name="home-outline" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="TopTab"
        component={TopTab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons color={color} size={22} name="person-outline" />
          ),
        }}
      /> */}

      {/* <Drawer.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          drawerIcon: ({color}) => (
            <Feather color={color} size={22} name="shopping-cart" />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons color={color} size={22} name="settings-outline" />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="SearchBar"
        component={SearchBar}
        options={{
          drawerIcon: ({color}) => (
            <Feather color={color} size={22} name="shopping-cart" />
          ),
        }}
      /> */}
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}
