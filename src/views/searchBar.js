import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import ShopScreen from '../../src/views/shop';
import RestaurantScreen from '../../src/views/restaurant';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
export default function SearchBar() {
  const navigation = useNavigation();
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
    </View>
  );
}
const styles = StyleSheet.create({
  main_view: {
    backgroundColor: '#fff',
    width: '100%',
    height: 118,
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
});
