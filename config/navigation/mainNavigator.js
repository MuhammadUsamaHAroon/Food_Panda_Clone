import {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopScreen from '../../src/views/shop';
import RestaurantScreen from '../../src/views/restaurant';
import SearchScreen from '../../src/views/searchBar';
import ProfileScreen from '../../src/views/profile';
import HomeScreen from '../../src/views/Home/home';
import SettingScreen from '../../src/views/settings';
import DrawerNavigator from './drawer';
import TopTabScreen from './topTabNavigator';
import CartScreen from '../../src/views/cart';
import ProductsScreen from '../../src/components/products';
import SplashScreen from '../../src/views/splash';

const Stack = createStackNavigator();

// export default function StackNavigator() {
//   return <MainStack />;
// }
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="TopTab" component={TopTabScreen} /> */}
      <Stack.Screen
        name="SearchBar"
        component={TopTabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
