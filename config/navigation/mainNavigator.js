import {createStackNavigator} from '@react-navigation/stack';
import ShopScreen from '../../src/views/shop';
import RestaurantScreen from '../../src/views/restaurant';
import SearchScreen from '../../src/views/searchBar';
import ProfileScreen from '../../src/views/profile';
import HomeScreen from '../../src/views/Home/home';
import SettingScreen from '../../src/views/settings';
import DrawerNavigator from './drawer';
import TopTabScreen from './topTabNavigator';
const Stack = createStackNavigator();

const mainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="TopTab" component={TopTabScreen} /> */}
      <Stack.Screen
        name="SearchBar"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
export default mainStack;
