import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function FoodDelivery() {
  return (
    <View style={styles.FoodDelivery_container}>
      <Text style={styles.title}>Food Delivery</Text>
      <Text style={styles.text}>Order from your favourite restaurants...</Text>
      <Image
        source={require('../assets/images/food_delivery.png')}
        style={{
          height: 100,
          width: 130,
          marginBottom: 5,
          alignSelf: 'flex-end',
          resizeMode: 'stretch',
          marginTop: 18,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  FoodDelivery_container: {
    height: 225,
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 20,
    // marginLeft: 15,
  },
  title: {
    color: '#333',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 10,
    marginLeft: 18,
  },
  text: {
    color: '#333',
    fontSize: 12,
    marginLeft: 18,
    marginRight: 10,
  },
});
