import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { RenderResult } from "../../../components/authenticated/RenderResult";
import { post } from "../../../services/ApiServices";
import { Search } from "../../../components/authenticated/Search";

export const ResultScreen = ({ route }) => {

  const { categoryId, search_query } = route.params;

  const [resultData, setResultData] = useState([]);

  const getResult = () => {
    let postData = {}
    if (categoryId) {
      postData = { 'category_id': categoryId };
    } else {
      postData = { 'search_query': search_query };
    }

    post('search', postData).then((response) => {
      // TODO: need to handel Pagination
      setResultData(response.data.data);

    }).catch((error) => {
      console.log(error);
    });
  }

  resultData.length === 0 ? getResult() : null;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <Search />
      <FlatList
        data={resultData}
        renderItem={RenderResult}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
