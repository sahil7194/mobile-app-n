import React from 'react'
import { View, Text} from 'react-native'

export const ResultItem = ({shop}) => {

    const  {name, address, rating, views} = shop;

  return (
    <View >
        <Text>
           { name}
        </Text>
        <Text>
           { address}
        </Text>
        <Text>
           { rating}
        </Text>
        <Text>
           { views}
        </Text>
    </View>
  )
}
