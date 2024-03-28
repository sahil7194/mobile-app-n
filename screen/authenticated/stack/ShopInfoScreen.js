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
      <Search />
      <View className="p-1">
        <Image
          className="w-full h-64"
          source={{
            uri: image,
          }} />

        <View className="border border-red-400 p-3">
          <Text className="p-1 text-lg"> Shop Name :- {name}</Text>
          <Text className="p-1"> Shop Address :- {address}</Text>
          <Text className="p-1"> Shop Contact Number :- {contact_number}</Text>
          {/* 
          // update shop status and shop color
          <Text className="p-1"> Shop Open Status :-  {opne_status}</Text> 
          */}
          <Text className="p-1"> Time :-  {open_time} To  {close_time}</Text>
          <Text className="p-1"> Rating : -{rating}</Text>
          <Text className="p-1"> Views :-  {views}</Text>
          {/* TODO: use for geo location
           <Text className="p-1"> Latitude :- {latitude}</Text>
          <Text className="p-1"> Longitude :-  {longitude}</Text>
          <Text className="p-1"> Zoom Level :- {zoom_level}</Text> */}
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  )
}
