import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';

export default function Cuisines() {
  const [categories, setCategories] = useState([
    {
      image: require('../assets/images/pizza.png'),
      name: 'Pizza',
    },
    {
      image: require('../assets/images/burger.png'),
      name: 'Burgers',
    },
    {
      image: require('../assets/images/biryani.png'),
      name: 'Biryani',
    },
    {
      image: require('../assets/images/shawarma.png'),
      name: 'Shawarma',
    },
    {
      image: require('../assets/images/fast_food.png'),
      name: 'Fast Food',
    },
    {
      image: require('../assets/images/dessert.png'),
      name: 'Dessert',
    },
    {
      image: require('../assets/images/chiness.png'),
      name: 'Chinese',
    },
    {
      image: require('../assets/images/bbq.png'),
      name: 'BBQ',
    },
    {
      image: require('../assets/images/pulao.png'),
      name: 'Pulao',
    },
    {
      image: require('../assets/images/sandwich.png'),
      name: 'Sandwich',
    },
    {
      image: require('../assets/images/fried_chicken.png'),
      name: 'Fried Chicken',
    },
    {
      image: require('../assets/images/dumpling.png'),
      name: 'Dumpling',
    },
    {
      image: require('../assets/images/thai.png'),
      name: 'Thai',
    },
    {
      image: require('../assets/images/steak.png'),
      name: 'Steak',
    },
    {
      image: require('../assets/images/sushi.png'),
      name: 'Sushi',
    },
  ]);
  return (
    <View style={styles.cuisines}>
      <Text style={styles.title}>Cuisines</Text>
      <FlatList
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'row'}} key={index}>
              <View>
                <Image source={item.image} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cuisines: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
  },
  title: {
    color: '#333',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
