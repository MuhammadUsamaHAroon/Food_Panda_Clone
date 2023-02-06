import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';
import CartNone from '../components/Cart/cartNone';
import CartItems from '../components/Cart/cartItems';
export default function Cart() {
  const [cart, setCart] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const [productsList, setProductsList] = useState([
    {
      image: require('../assets/images/pizza.png'),
      title: 'Pizzaplex',
      area: 'FB Area',
      name: 'Pizza',
      deliveryCharges: `Rs.${49}`,
      otherDetails: {
        deliveryTime: '30 min',
        rating: `2.4`,
        orders: `(100+)`,
      },
    },
    {
      image: require('../assets/images/burger.png'),
      title: 'BurgerPlex',
      area: 'Noth Nazomabad',
      name: 'Beef-Burger',
      deliveryCharges: `Rs.${70}`,
      otherDetails: {
        deliveryTime: '20 min',
        rating: `3.0`,
        orders: `(60+)`,
      },
    },
    {
      image: require('../assets/images/thai.png'),
      title: 'Pizza Fries',
      area: 'Gulshan',
      name: 'Pizza-Fries',
      deliveryCharges: `Rs.${120}`,
      otherDetails: {
        deliveryTime: '35 min',
        rating: `2.9`,
        orders: `(150+)`,
      },
    },
    {
      image: require('../assets/images/chiness.png'),
      title: 'Pizzaplex',
      area: 'FB Area',
      name: 'Pizza',
      deliveryCharges: `Rs.${49}`,
      otherDetails: {
        deliveryTime: '30 min',
        rating: `2.4`,
        orders: `(100+)`,
      },
    },
    {
      image: require('../assets/images/biryani.png'),
      title: 'Pizzaplex',
      area: 'FB Area',
      name: 'Pizza',
      deliveryCharges: `Rs.${49}`,
      otherDetails: {
        deliveryTime: '30 min',
        rating: `2.4`,
        orders: `(100+)`,
      },
    },
    {
      image: require('../assets/images/bbq.png'),
      title: 'Spicy Tikka',
      area: 'Bhadurabad',
      name: 'Chicken Tikka',
      deliveryCharges: `Rs.${150}`,
      otherDetails: {
        deliveryTime: '45 min',
        rating: `2.7`,
        orders: `(200+)`,
      },
    },
    {
      image: require('../assets/images/dessert.png'),
      title: 'Spicy Tikka',
      area: 'Bhadurabad',
      name: 'Chicken Tikka',
      deliveryCharges: `Rs.${150}`,
      otherDetails: {
        deliveryTime: '45 min',
        rating: `2.7`,
        orders: `(200+)`,
      },
    },
    {
      image: require('../assets/images/fried_chicken.png'),
      title: 'Spicy Tikka',
      area: 'Bhadurabad',
      name: 'Chicken Tikka',
      deliveryCharges: `Rs.${150}`,
      otherDetails: {
        deliveryTime: '45 min',
        rating: `2.7`,
        orders: `(200+)`,
      },
    },
  ]);

  return (
    <>
      <View style={styles.parent_view}>
        <View style={styles.header_view}>
          <View style={styles.align_view}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
              <AntDesign
                color={'#F81379'}
                size={22}
                name="close"
                style={{marginTop: 10}}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}>Cart</Text>
              <Text style={{color: '#333', marginLeft: 25}}>
                {cart ? `FB Area Block 14` : ''}
              </Text>
            </View>
          </View>
        </View>
        {cart ? (
          <>
            <CartItems
              productsList={productsList}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </>
        ) : (
          <>
            <CartNone />
          </>
        )}

        {/* <CartNone /> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_view: {
    width: '100%',
    height: 65,
    backgroundColor: '#fff',
    marginBottom: 5,
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
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 17,
    marginLeft: 25,
  },
});
