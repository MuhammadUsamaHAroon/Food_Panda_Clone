import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function SearchInput() {
  return (
    <View style={styles.parentInput}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: 320,
          // height: 40,
          borderColor: 25,
          borderRadius: 25,
        }}>
        <Ionicons color={'#333'} size={25} name="search-outline" />
        <TextInput
          style={styles.input}
          placeholder="Search for Shops & Restaurants"
        />
      </View>
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
    shadowOffset: 'black',

    // flexDirection: 'row',
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
