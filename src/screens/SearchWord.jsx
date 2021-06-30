import React from 'react';
import { View, FlatList } from "react-native";
import { Searchbar, List, IconButton, Colors } from 'react-native-paper';
import axios from 'axios';

export default function SearchWord(props) {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const [canSearch, setCanSearch] = React.useState(true);
  const [wordList, setWordList] = React.useState(true);

  const handleSearchChange = async e => {
    setSearchTerm(e);
  }

  React.useEffect(() => {
    if(canSearch){
      setCanSearch(false);
      axios.get(`http://192.168.1.102:3030/list/${searchTerm}`).then((result) => {
        setWordList(result.data)
        setCanSearch(true);
      }).catch((error) => {
        console.info("ops: " + error)
        setCanSearch(true);
      }) 
    }
  }, [searchTerm])


  const renderItem = ({ item, index }) => {
    return <List.Item
      title={item.nl.infinitive}
      description={item.en.infinitive}
      onPress={() => props.navigation.navigate('EditWord',{ item: item })}
    />
  };


  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearchChange}
      />

      <FlatList
        data={wordList}
        renderItem={renderItem}
        keyExtractor={item => item.en.infinitive}
      />

    </View>

  );
};
