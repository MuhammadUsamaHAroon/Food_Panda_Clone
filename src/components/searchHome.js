import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function SearchInput() {
  const navigation = useNavigation();
  return (
    <View style={styles.parentInput}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('SearchBar')}
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: 320,
          height: 37,
          borderRadius: 25,
        }}>
        <Ionicons
          color={'#333'}
          size={25}
          name="search-outline"
          style={{marginLeft: 15}}
        />
        <Text style={{marginLeft: 10, color: '#333'}}>
          Search for Shops & Restaurants
        </Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Search for Shops & Restaurants"
        /> */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  parentInput: {
    height: 60,
    width: '100%',
    backgroundColor: '#F81379',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    // flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 250,
    height: 40,
    backgroundColor: '#fff',
    color: '#333',
    paddingLeft: 10,
    // paddingTop:15
  },
});
