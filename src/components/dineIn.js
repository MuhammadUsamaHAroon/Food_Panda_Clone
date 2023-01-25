import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function DineIn() {
  return (
    <View style={styles.dine_in}>
      <View>
        <Text style={styles.title}>Dine-in</Text>
        <Text style={styles.text}>Eat out and</Text>
        <Text style={styles.text}>save 20%</Text>
      </View>
      <Image
        source={require('../assets/images/dine_in.png')}
        style={{
          height: 55,
          width: 70,
          resizeMode: 'stretch',
          alignSelf: 'flex-end',
          marginTop: 15,
          marginLeft:5
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dine_in: {
    height: 70,
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    color: '#333',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 13,
  },
  text: {
    color: '#333',
    fontSize: 12,
    marginLeft: 13,
    marginRight: 10,
  },
});
