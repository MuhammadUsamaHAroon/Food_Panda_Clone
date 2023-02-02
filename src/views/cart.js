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
export default function Cart() {
  const [cartItems, setCartItems] = useState(true);
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
              {cartItems ? `FB Area Block 14` : ''}
            </Text>
          </View>
        </View>
      </View>
      {cartItems ? (
        <>
          <ScrollView>
            <View style={styles.cart_parent}>
              <View style={styles.delivery_view}>
                <Image
                  source={require('../assets/images/delivery_image.png')}
                  style={styles.delivery_image}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    marginVertical: 15,
                    marginHorizontal: 25,
                    // borderWidth:1
                  }}>
                  <Text style={styles.delivery_text}>Estimated delivery</Text>
                  <Text style={styles.delivery_time}>Now (25 min)</Text>
                  <TouchableOpacity>
                    <Text style={styles.btn_change}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={productsList}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.items_view} key={index}>
                      <View style={styles.item_quantity}>
                        <TouchableOpacity
                          onPress={() => setQuantity(quantity - 1)}>
                          <Feather
                            color={'#F81379'}
                            size={20}
                            name="minus"
                            style={{marginBottom: 8}}
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            color: '#333',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          {quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => setQuantity(quantity + 1)}>
                          <Feather
                            color={'#F81379'}
                            size={20}
                            name="plus"
                            style={{marginTop: 8}}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: 225,
                          paddingRight: 15,
                          height: 100,
                        }}>
                        <Image style={styles.item_image} source={item.image} />
                        <Text
                          style={[styles.item_name, {flexDirection: 'column'}]}>
                          {item.name}
                        </Text>
                      </View>
                      <Text style={styles.item_price}>Rs. 100.00</Text>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
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
        </>
      )}
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
    height: 65,
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
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 17,
    marginLeft: 25,
  },
  center_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
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
  cart_parent: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  delivery_view: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    width: '90%',
    height: 100,
    marginVertical: 20,
    marginHorizontal: 18,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  delivery_image: {
    resizeMode: 'stretch',
    width: 80,
    height: 80,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  delivery_text: {},
  delivery_time: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  btn_change: {
    color: '#F81379',
    fontSize: 15,
    fontWeight: 'bold',
  },
  items_view: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    width: '100%',
    height: 110,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  item_quantity: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    width: 40,
    height: 85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    marginLeft: 17,
    // marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  item_image: {
    resizeMode: 'stretch',
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  item_name: {
    marginHorizontal: 10,
    color: '#F81379',
    fontSize: 16,
    textAlign: 'left',
    paddingRight: 55,
    // fontWeight: 'bold',
  },
  item_price: {
    color: '#333',
  },
});
