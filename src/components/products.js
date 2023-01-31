import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function Products() {
  const [productsList, setProductsList] = useState([
    {
      image: require('../assets/images/pizza_image.jpg'),
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
      image: require('../assets/images/burger_image.jpg'),
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
      image: require('../assets/images/pizza_fries.jpeg'),
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
      image: require('../assets/images/broast_image.jpg'),
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
      image: require('../assets/images/chikcken_Karahi.jpeg'),
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
      image: require('../assets/images/chicken_tikka.jpeg'),
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
  const navigation = useNavigation();
  // const backgroundImage = require('');
  return (
    <View style={styles.parent_view}>
      <View style={styles.header_view}>
        <AntDesign
          color={'#F81379'}
          size={22}
          name="arrowleft"
          style={{marginLeft: 20, marginTop: 5, marginRight: 15}}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.text}>Pizza</Text>
      </View>
      <FlatList
        data={productsList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.product_main_view} key={index}>
              <View style={styles.image_view}>
                <ImageBackground
                  source={item.image}
                  imageStyle={{borderRadius: 6}}
                  style={{
                    resizeMode: 'contain',
                    borderRadius: 15,
                    flex: 1,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#F81379',
                      width: 130,
                      marginTop: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginHorizontal: 8,
                        fontSize: 14,
                      }}>
                      Pau-pau 70% OFF
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#F81379',
                      width: 100,
                      marginTop: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginHorizontal: 8,
                        fontSize: 14,
                      }}>
                      Magic Meals
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      marginHorizontal: 5,
                      marginVertical: 60,
                      width: 50,
                      alignItems: 'center',
                      borderRadius: 15,
                      padding: 2,
                    }}>
                    <Text
                      style={{
                        color: '#333',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}>
                      {item.otherDetails.deliveryTime}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    marginLeft: 18,
                    marginTop: 5,
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: 15,
                  }}>
                  {item.title} - {item.area}
                </Text>
                <View
                  style={{
                    marginRight: 18,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Feather
                    color={'red'}
                    size={15}
                    name="star"
                    style={{marginRight: 3}}
                  />
                  <Text
                    style={{color: '#333', fontWeight: 'bold', marginRight: 2}}>
                    {item.otherDetails.rating}
                  </Text>
                  <Text>{item.otherDetails.orders}</Text>
                </View>
              </View>
              <Text style={{marginLeft: 17}}>$$ . {item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  color={'gray'}
                  size={22}
                  name="delivery-dining"
                  style={{marginLeft: 15, marginTop: 2, marginRight: 5}}
                  onPress={() => navigation.navigate('Home')}
                />
                <Text>{item.deliveryCharges}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
  },
  header_view: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    marginBottom: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    fontSize: 20,
    marginTop: 2,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  product_main_view: {
    // borderWidth: 1,
    width: '100%',
    height: 237,
    // marginVertical: 5,
    backgroundColor: '#fff',
  },
  image_view: {
    borderWidth: 1,
    height: 160,
    width: '92%',
    borderRadius: 10,
    marginLeft: 15,
    borderColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
