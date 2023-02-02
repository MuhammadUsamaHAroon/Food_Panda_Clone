import {View, Text, StyleSheet, SafeAreaProvider} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header_Container}>
      <View style={styles.align_view}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Octicons color={'#fff'} size={22} name="three-bars" />
        </TouchableOpacity>
        <View style={styles.address_View}>
          <Text style={styles.area_address}>R 583 Block 14 FB Area...</Text>
          <Text style={styles.city_address}>Karachi</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          activeOpacity={0.7}>
          <Ionicons color={'#fff'} size={22} name="cart-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header_Container: {
    backgroundColor: '#F81379',
    paddingTop: 15,
    paddingBottom: 5,
    // flex:1
  },
  align_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  address_View: {
    flexDirection: 'column',
  },
  area_address: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  city_address: {
    color: '#fff',
  },
});
