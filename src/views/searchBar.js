import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import ShopScreen from '../../src/views/shop';
import RestaurantScreen from '../../src/views/restaurant';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Restaurant from '../../src/views/restaurant';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

export default function SearchBar() {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Restaurant'},
    {key: 'second', title: 'Shops'},
  ]);
  return (
    <View style={styles.main_view}>
      <View style={styles.align_view}>
        <AntDesign
          color={'#F81379'}
          size={22}
          name="arrowleft"
          style={{marginLeft: 20, marginTop: 10, marginRight: 15}}
          onPress={() => navigation.navigate('Home')}
        />
        <TextInput
          placeholder="Search for shops & restaurants"
          keyboardType="text"
          style={styles.input}
        />
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // borderWidth: 1,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navi
        ate('Restaurant')}>
          <Text style={styles.restaurant_text}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.shops_text}>Shops</Text>
        </TouchableOpacity>
      </View> */}
      {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      /> */}
      <Restaurant />
    </View>
  );
}
const styles = StyleSheet.create({
  main_view: {
    backgroundColor: '#fff',
    width: '100%',
    height: 93,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  align_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#faf9f7',
    width: 280,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: 'center',
  },
  restaurant_text: {
    color: '#F81379',
    fontWeight: 'bold',
    fontSize: 16,
  },
  shops_text: {
    color: '#F81379',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
