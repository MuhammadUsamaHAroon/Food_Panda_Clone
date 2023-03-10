import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ShopsMart() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.shops_mart}>
      <View>
        <Text style={styles.title}>Shops</Text>
        <Text style={styles.text}>Everyday</Text>
        <Text style={styles.text}>essentials</Text>
      </View>
      <Image
        source={require('../assets/images/shops.png')}
        style={{
          height: 90,
          width: 85,
          resizeMode: 'stretch',
          alignSelf: 'flex-end',
          marginRight: 10,
          marginTop: 15,
        }}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  shops_mart: {
    height: 70,
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 9,
    marginLeft: 9,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    color: '#333',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 13,
  },
  text: {
    color: '#333',
    fontSize: 12,
    marginLeft: 13,
    marginRight: 10,
  },
});
