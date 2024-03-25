import React, { useState } from 'react'
import { Text, View, SafeAreaView, StatusBar, Button, Image } from 'react-native'
import { get } from '../../../services/ApiServices';
import { Search } from '../../../components/authenticated/Search';

export const ShopInfoScreen = ({ route, navigation }) => {
  const { shopId } = route.params;

  const [shop, setShop] = useState('');

  const { address,
    close_time,
    contact_number,
    id,
    image,
    latitude,
    longitude,
    name,
    open_time,
    opne_status,
    rating,
    views,
    zoom_level
  } = shop;

  const getShopInfo = () => {
    get('shops/' + shopId).then((resposne) => {
      setShop(resposne.data);
    }).catch((error) => {
      console.log(error);
    })

  }
  
  name === undefined ? getShopInfo() : null;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <Search/>
      <View>
        <Text>
          ShopInfoScreen
        </Text>
        <Text>ShopId : {shopId}</Text>
        <Image
          className="w-full h-64"
          source={{
            uri: image,
          }} />

        <Text> {name}</Text>
        <Text> {address}</Text>
        <Text> {contact_number}</Text>
        <Text> {opne_status}</Text>
        <Text> {open_time}</Text>
        <Text> {close_time}</Text>
        <Text> {rating}</Text>
        <Text> {views}</Text>
        <Text> {latitude}</Text>
        <Text> {longitude}</Text>
        <Text> {zoom_level}</Text>

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />

      </View>
    </SafeAreaView>
  )
}
