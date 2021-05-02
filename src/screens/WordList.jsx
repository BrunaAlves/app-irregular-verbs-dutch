import React from 'react';
import { View, StyleSheet, FlatList, Button, Pressable } from "react-native";
import { List, IconButton, Colors } from 'react-native-paper';
import Fab from '../components/Fab';
const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function WordList(props) {

  function deleteItem(index) {
    props.onDelete(index)
  }

  const renderItem = ({ item, index }) => {
    return <List.Item
      title={item.en.infinitive}
      description={item.nl.infinitive}
      right={props => <IconButton
        icon="trash-can-outline"
        color={Colors.red500}
        size={20}
        onPress={() => deleteItem(index)}
      />}

    />
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