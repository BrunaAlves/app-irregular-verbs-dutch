import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import CardList from './src/screens/CardList';
import WordList from './src/screens/WordList';
import AddWord from './src/screens/AddWord';
import EditWord from './src/screens/EditWord';
import SearchWord from './src/screens/SearchWord';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WordRepository from './src/databases/WordRepository';

const wordRepository = new WordRepository();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

export default function App() {
  const [wordsList, setWordList] = React.useState([]);

  if(wordsList.length == 0){ //Se a lista tiver vazia, inicia o banco
    wordRepository.init().then(() => {
      wordRepository.getAll().then((data) => {
        if(data.length > 0){
          setWordList(data);
        }
      })
    });
  }

  function finishShuffle() {
    setWordList([].concat(wordsList))
  }

  function CardListStack({ route, navigation }) {
    return <CardList
      navigation={navigation}
      words={route.params.arrayShuffle}
      finishShuffle={finishShuffle}
    />;
  }

  function WordListStack(props) {
    return <WordList
      onDelete={(item, index) => {
        wordRepository.delete(item.id).then(() => {
          wordsList.splice(index, 1)
          setWordList([].concat(wordsList))
        })       
      }}
      words={wordsList}
      navigation={props.navigation}
    />
  }

  function EditWordStack({ route, navigation }) {
    return <EditWord
      item={route.params.item}
      onEdit={(word) => {
        wordRepository.update(word).then(()=>{
          var indexPosition = -1;
          wordsList.forEach((w, index) => {
            if (word.id === w.id) indexPosition = index;
          })
          wordsList.splice(indexPosition, 1)
          setWordList(wordsList.concat([word]))
        });
      }}
      navigation={navigation}
    />
  }

  function AddWordStack(props) {
    return <AddWord
      onSave={(word) => {
        word.id = wordsList.length + 1;
        wordRepository.create(word).then(()=>{
          setWordList(wordsList.concat([word]))
        })
      }}
      navigation={props.navigation}
    />
  }

  function SearchWordStack(props) {
    return <SearchWord
      navigation={props.navigation}
    />
  }

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: false, headerLeft: null }} initialRouteName="WordList">
          <Stack.Screen name="WordList" component={WordListStack} />
          <Stack.Screen name="CardList" component={CardListStack} />
          <Stack.Screen name="AddWord" component={AddWordStack} />
          <Stack.Screen name="EditWord" component={EditWordStack} />
          <Stack.Screen name="SearchWord" component={SearchWordStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


