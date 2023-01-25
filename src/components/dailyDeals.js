import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';

export default function DailyDeals() {
  const [deals, setDeals] = useState([
    require('../assets/images/best_seller.jpg'),
    require('../assets/images/bring_fancy.jpg'),
    require('../assets/images/fresh_on.jpg'),
    require('../assets/images/cake_magic.jpg'),
    require('../assets/images/faves.jpg'),
    require('../assets/images/shops_your.jpg'),
    require('../assets/images/best_seller.jpg'),
    require('../assets/images/like_panda.jpg'),
    require('../assets/images/new_on.jpg'),
    require('../assets/images/top.jpg'),
    require('../assets/images/foodpand_shops.jpg'),
    require('../assets/images/top_save.jpg'),
    require('../assets/images/tap_dine.jpg'),
  ]);
  //   console.log(deals);
  return (
    <View style={styles.daily_deals}>
      <Text style={styles.title}>Your daily deals</Text>
      <View style={styles.image_view}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // keyExtractor={({item, index}) => index.toString()}
          data={deals}
          renderItem={({item, index}) => {
            return <Image source={item} key={index} style={styles.images} />;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  daily_deals: {
    height: 250,
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    color: '#333',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  image_view: {
    // paddingLeft: 10,
    // marginRight: 10,
  },
  images: {
    resizeMode: 'stretch',
    height: 190,
    width: 150,
    borderRadius: 15,
    marginRight: 6,
    marginLeft: 4,
  },
});
