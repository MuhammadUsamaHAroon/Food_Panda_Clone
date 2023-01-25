import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function PandaMart() {
  return (
    <View style={styles.panda_mart}>
      <Text style={styles.title}>PandaMart</Text>
      <Text style={styles.text}>Convenience, Delivered!</Text>
      <Image
        source={require('../assets/images/panda_mart.png')}
        style={{
          height: 80,
          width: 85,
          resizeMode: 'stretch',
          alignSelf: 'flex-end',
          marginRight: 10,
          marginTop: 15,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  panda_mart: {
    height: 145,
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 9,
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
