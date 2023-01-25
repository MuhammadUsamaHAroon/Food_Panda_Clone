import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchInput from '../components/searchHome';
import Header from '../components/headerHome';
export default function Shop() {
  return (
    <View>
      <Header />
      <SearchInput />
    </View>
  );
}
