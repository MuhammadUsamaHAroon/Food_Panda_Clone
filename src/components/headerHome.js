import {View, Text, StyleSheet, SafeAreaProvider} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header_Container}>
      <View style={styles.align_view}>
        <Octicons
          color={'#fff'}
          size={22}
          name="three-bars"
          onPress={() => navigation.toggleDrawer()}
        />
        <View style={styles.address_View}>
          <Text style={styles.area_address}>R 583 Block 14 FB Area...</Text>
          <Text style={styles.city_address}>Karachi</Text>
        </View>
        <Ionicons color={'#fff'} size={22} name="cart-outline" />
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
