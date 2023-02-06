import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';
export default function CartItems(props) {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.cart_parent}>
          <View style={styles.delivery_view}>
            <Image
              source={require('../../assets/images/delivery_image.png')}
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
            data={props.productsList}
            renderItem={({item, index}) => {
              return (
                <View style={styles.items_view} key={index}>
                  <View style={styles.item_quantity}>
                    <TouchableOpacity
                      onPress={() => props.setQuantity(props.quantity - 1)}>
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
                      {props.quantity}
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.setQuantity(props.quantity + 1)}>
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
                    <Text style={[styles.item_name, {flexDirection: 'column'}]}>
                      {item.name}
                    </Text>
                  </View>
                  <Text style={styles.item_price}>Rs. 100.00</Text>
                </View>
              );
            }}
          />
          <View style={styles.more_items}>
            <TouchableOpacity>
              <Text style={{color: '#F81379', fontSize: 14}}>
                Add more Items
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{width: '100%', height: 8, backgroundColor: '#eee'}}></View>
          <View style={styles.subTotal_view}>
            <View style={styles.subTotal}>
              <Text style={styles.subTotal_title}>Subtotal</Text>
              <Text style={styles.subTotal_price}>Rs. 879.33</Text>
            </View>
            <View style={styles.delivery_fee}>
              <Text style={styles.text}>Delivery Fee</Text>
              <Text style={styles.charges}>Rs. 879.33</Text>
            </View>
            <View style={styles.platform_fee}>
              <Text style={styles.text}>Platform Fee</Text>
              <Text style={styles.charges}>Rs. 879.33</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkout_view}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000',
                marginLeft: 20,
              }}>
              Total
            </Text>
            <Text style={{fontSize: 10, marginLeft: 5, fontWeight: 'bold'}}>
              (incl. VAT)
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginRight: 20,
            }}>
            Rs. 879.33
          </Text>
        </View>
        <Pressable
          // onPress={() => navigation.navigate('Home')}
          hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [styles.btn]}>
          <Text style={styles.btn_text}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cart_parent: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
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
  more_items: {
    height: 30,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  checkout_view: {
    width: '100%',
    height: 120,
    position: 'relative',
    paddingTop: 23,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fafafa',
  },
  btn: {
    backgroundColor: 'green',
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 45,
    backgroundColor: '#F81379',
    alignSelf: 'center',
  },
  btn_text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  subTotal_view: {
    // borderWidth: 1,
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 20,
  },
  subTotal_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subTotal_price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  delivery_fee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  platform_fee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
