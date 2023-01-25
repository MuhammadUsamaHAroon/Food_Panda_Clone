import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#F81379',
          //   height: 185,
          //   marginBottom: 10,
        }}>
        <Image
          source={require('../assets/images/profileImage.jpg')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 40,
            marginBottom: 5,
            marginLeft: 20,
            marginTop: 50,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginLeft: 13,
            paddingBottom: 20,
            marginTop:5
          }}>
          Usama Haroon
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 8,
            paddingTop: 15,
          }}>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
