import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function PandaReward() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 30,
      }}>
      <TouchableOpacity activeOpacity={0.7} style={styles.panda_reward}>
        <View>
          <Text style={styles.title}>Try panda rewards!</Text>
          <Text style={styles.text}>Earn points and win prizes</Text>
        </View>
        <Image
          source={require('../assets/images/pandaReward.png')}
          style={{
            height: 78,
            width: 100,
            resizeMode: 'stretch',
            alignSelf: 'flex-end',
            marginLeft: 34,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  panda_reward: {
    height: 80,
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 9,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#eee',
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
