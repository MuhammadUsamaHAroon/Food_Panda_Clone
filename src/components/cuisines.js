import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';

export default function Cuisines() {
  const [categories1, setCategories1] = useState([
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
  ]);
  const [categories2, setCategories2] = useState([
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
  console.log(categories1.image);
  return (
    <View style={styles.cuisines}>
      <Text style={styles.title}>Cuisines</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories1}
        renderItem={({item, index}) => {
          return (
            <View style={styles.image_view}>
              <Image source={item.image} key={index} style={styles.images} />
              <Text style={styles.item_Name}>{item.name}</Text>
            </View>
          );
        }}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.image_view}>
              <Image source={item.image} key={index} style={styles.images} />
              <Text style={styles.item_Name}>{item.name}</Text>
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
    height: 345,
    paddingBottom: 15,
  },
  title: {
    color: '#333',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  image_view: {
    height: 90,
    width: 90,
    borderRadius: 15,
    backgroundColor: '#eee',
    marginLeft: 6,
    marginRight: 6,
  },
  item_Name: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  images: {
    resizeMode: 'stretch',
    height: 80,
    width: 80,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: 13,
  },
});
