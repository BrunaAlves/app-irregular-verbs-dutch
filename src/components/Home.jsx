import React from 'react';
import { View, StyleSheet, FlatList, Button } from "react-native";
import words from '../irregular-verbs.json';
import { Title, 
  Description, 
  Container, 
  TitleBar, 
  IconDelete, 
  IconEdit,
  WrapperDelete,
  WrapperEdit,
  Teste } from '../styles/style';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
}); 

export default function Home(props){

  const renderItem = ({ item }) => {
    return <TitleBar><Title>{item.en.infinitive}</Title></TitleBar>
  };

  return <View>
          {/* <FlatList
            data={words}
            renderItem={renderItem}
            keyExtractor={item => item.en.infinitive}
          /> */}
          <Button
              title="Suffle"
              onPress={() => props.navigation.navigate('CardList')}
            />
        </View>;
}