import React from "react";
import { Text, View, SafeAreaView, StatusBar, Button , FlatList} from "react-native";
import { RenderResult } from "../../../components/authenticated/RenderResult";
import { ResultStub } from "../../../stub/result.stub";

export const ResultScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;

  const data = ResultStub;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      
      <View className="">
        <Text>ResultScreen with search query </Text>
        <Text>Category Id : {JSON.stringify(categoryId)} </Text>
        <Text>Category Name : {JSON.stringify(categoryName)} </Text>
        {/* <Button
          title="Go to ShopInfo"
          onPress={() => navigation.navigate("ShopInfo", { shopId: 1 })}
        /> */}
      </View>
      <FlatList      
        data={data}
        renderItem={RenderResult}
        keyExtractor={(item) => item.id}
      />


    </SafeAreaView>
  );
};
