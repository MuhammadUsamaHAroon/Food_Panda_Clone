import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.parent_view}>
      <View style={styles.header_view}>
        <View style={styles.align_view}>
          <AntDesign
            color={'#F81379'}
            size={22}
            name="close"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.text}>Cart</Text>
        </View>
      </View>
      <View style={styles.center_view}>
        <Image
          source={require('../assets/images/cart_image.png')}
          style={styles.image}
        />
        <Text style={styles.boldText}>Hungry?</Text>
        <Text style={{color: '#333'}}>
          You haven't added anything to your cart!
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [styles.btn_browse]}>
          <Text style={styles.btn_text}>Browse</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_view: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  align_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 15,
  },
  text: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 20,
    marginLeft: 25,
  },
  center_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 150,
    width: 140,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  boldText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  btn_browse: {
    backgroundColor: 'green',
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10,
    height: 35,
    backgroundColor: '#F81379',
  },
  btn_text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
