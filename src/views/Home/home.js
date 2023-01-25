import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchInput from '../../components/searchHome';
import Header from '../../components/headerHome';
import FoodDelivery from '../../components/foodDelivery';
import PandaMart from '../../components/pandaMart';
import ShopsMart from '../../components/shopsMart';
import DineIn from '../../components/dineIn';
import PickUp from '../../components/pickUp';
import Shop from '../shop';
import DailyDeals from '../../components/dailyDeals';
import Cuisines from '../../components/cuisines';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
export default function Home() {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#ebebeb'}}>
        <Header />
        <SearchInput />
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            // backgroundColor: '#ebf1f2',
            paddingBottom: 10,
          }}>
          <FoodDelivery />
          <View style={{flexDirection: 'column'}}>
            <PandaMart />
            <ShopsMart />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: 15, paddingBottom: 15}}>
          <DineIn />
          <PickUp />
        </View>
        <DailyDeals />
        <Cuisines />
      </View>
    </ScrollView>
  );
}
