import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function PickUp() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.pick_up}>
      <View>
        <Text style={styles.title}>Pick-up</Text>
        <Text style={styles.text}>Enjoy up to</Text>
        <Text style={styles.text}>50% off and ...</Text>
      </View>
      <Image
        source={require('../assets/images/pick_up.png')}
        style={{
          height: 65,
          width: 55,
          resizeMode: 'stretch',
          alignSelf: 'flex-end',
          marginTop: 15,
          marginLeft: 3.5,
        }}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  pick_up: {
    height: 70,
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft: 9,
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
