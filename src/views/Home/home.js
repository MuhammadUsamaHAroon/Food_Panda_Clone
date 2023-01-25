import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  refreshing,
} from 'react-native';
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
import BecomePro from '../../components/becomePro';
import PandaReward from '../../components/pandaReward';
export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          colors={['#F81379']}
        />
      }>
      <View style={{backgroundColor: '#eee'}}>
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
        <BecomePro />
        <PandaReward />
      </View>
    </ScrollView>
  );
}
