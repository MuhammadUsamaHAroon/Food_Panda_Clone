import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';

export default function CartNone() {
  const navigation = useNavigation();
  return (
    <View style={styles.center_view}>
      <Image
        source={require('../../assets/images/cart_image.png')}
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
  );
}
const styles = StyleSheet.create({
  center_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // borderWidth: 1,
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
