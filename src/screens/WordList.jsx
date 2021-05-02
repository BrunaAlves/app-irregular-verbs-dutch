import React from 'react';
import { View, FlatList} from "react-native";
import { List, IconButton, Colors } from 'react-native-paper';
import Fab from '../components/Fab';

export default function WordList(props) {
  const [shuffleList, setShuffleList] = React.useState([]);

  function deleteItem(index) {
    props.onDelete(index)
  }

  function addToShuffle(item) {
    setShuffleList(shuffleList.concat([item]))

  }

  function removeToShuffle(item) {
    var index = getIndexItemOnShuffle(item)
    shuffleList.splice(index, 1)
    setShuffleList([].concat(shuffleList))

  }

  function getIndexItemOnShuffle(item) {
    var contain = -1;
    shuffleList.forEach((shuffleItem, index) => {
      if (item.en.infinitive === shuffleItem.en.infinitive) contain = index;
    })

    return contain;
  }

  function selectItem(item, index) {
    if (getIndexItemOnShuffle(item) > -1) {
      return <IconButton
        icon="checkbox-marked-circle"
        size={20}
        color={Colors.green500}
        onPress={() => removeToShuffle(item)}
      />
    }
    else {
      return <IconButton
        icon="checkbox-blank-circle-outline"
        size={20}
        onPress={() => addToShuffle(item)}
      />
    }

  }

  const renderItem = ({ item, index }) => {
    return <List.Item
      title={item.en.infinitive}
      description={item.nl.infinitive + "       " + item.data.correctAnswerCount + "/" + (item.data.wrongAnswerCount + item.data.correctAnswerCount)}
      left={props => selectItem(item, index)}
      right={props => <IconButton
        icon="trash-can-outline"
        color={Colors.red500}
        size={20}
        onPress={() => deleteItem(index)}
      />}

    />
  };

  return <View style={{flex: 1}}>

    <FlatList
      data={props.words}
      renderItem={renderItem}
      keyExtractor={item => item.en.infinitive}
    />
    <Fab navigation={props.navigation} arrayShuffle={shuffleList} />
  </View>;
}