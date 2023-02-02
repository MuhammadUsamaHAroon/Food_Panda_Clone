import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function BecomePro() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom8: 8,
      }}>
      <TouchableOpacity activeOpacity={0.7} style={styles.become_pro}>
        <View>
          <Text style={styles.title}>Become a pro</Text>
          <Text style={styles.text}>and get exclusive deals</Text>
        </View>
        <Image
          source={require('../assets/images/pro_panda.png')}
          style={{
            height: 65,
            width: 100,
            resizeMode: 'stretch',
            alignSelf: 'flex-end',
            marginLeft: 40,
            marginBottom: 7,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  become_pro: {
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
