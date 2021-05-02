import React from 'react';
import { View, StyleSheet, FlatList, Button } from "react-native";

import {
  Title,
  Description,
  Container,
  TitleBar,
  IconDelete,
  IconEdit,
  WrapperDelete,
  WrapperEdit,
  Teste
} from '../styles/style';
import Fab from '../components/Fab';
const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function Home(props) {

  const renderItem = ({ item }) => {
    return <TitleBar><Title>{item.en.infinitive}</Title></TitleBar>
  };

  return <View>
    <FlatList
      data={props.words}
      renderItem={renderItem}
      keyExtractor={item => item.en.infinitive}
    />
    <Fab navigation={props.navigation} />
  </View>;
}