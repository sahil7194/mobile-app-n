import React, { useState } from "react";
import { Text, View, SafeAreaView, StatusBar, Button , FlatList} from "react-native";
import { RenderResult } from "../../../components/authenticated/RenderResult";
import { ResultStub } from "../../../stub/result.stub";
import {post } from "../../../services/ApiServices";

export const ResultScreen = ({ route, navigation }) => {

  const { categoryId, categoryName } = route.params;

  const [resultData , setResultData] = useState([]);

  const getResult = () => {
      post('search',{
        'category_id': categoryId,
      }).then((response) => {
        // TODO: need to handel Pagination
        setResultData(response.data.data);

      }).catch((error) => {
          console.log(error);
      });
  }

  resultData.length === 0 ? getResult() : null ;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      
      <View className="">
        <Text>ResultScreen with search query </Text>
        <Text>Category Id : {JSON.stringify(categoryId)} </Text>
        <Text>Category Name : {JSON.stringify(categoryName)} </Text>
      </View>
      <FlatList      
        data={resultData}
        renderItem={RenderResult}
        keyExtractor={(item) => item.id}
      />


    </SafeAreaView>
  );
};
