import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShopScreen from '../../src/views/shop';
import RestaurantScreen from '../../src/views/restaurant';
import {mainStack, restaurantAndShopStack} from './mainNavigator';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Restaurant"
      screenOptions={({route}) => ({
        tabBarScrollEnabled: false,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 50,
        },
        tabBarActiveTintColor: '#F81379',
        tabBarInactiveTintColor: '#333',
        tabBarActiveBackgroundColor: '#F81',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 14},
        tabBarIndicatorStyle: {
          borderBottomColor: '#F81379',
          borderBottomWidth: 2,
        },
      })}>
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
    </Tab.Navigator>
  );
};
export default MyTabs;
