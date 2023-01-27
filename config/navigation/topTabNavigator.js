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
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Restaurant') {
            iconName = 'home';
            size = focused ? 28 : 20;
          } else if (route.name === 'Shop') {
            iconName = 'setting';
            size = focused ? 28 : 20;
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#eee',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
    </Tab.Navigator>
  );
};
export default MyTabs;
