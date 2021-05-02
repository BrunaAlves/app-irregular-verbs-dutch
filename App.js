import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import CardList from './src/screens/CardList';
import WordList from './src/screens/WordList';
import AddWord from './src/screens/AddWord';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import words from './src/irregular-verbs.json';

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
  const [wordsList, setWordList] = React.useState(words);

  function CardListStack(){
    return <CardList 
      words={[]} 
    />;
  }

  function WordListStack(props){
    return <WordList
    onDelete={(index) => {
      wordsList.splice(index, 1)
      setWordList([].concat(wordsList))
    }}
      words={wordsList}
      navigation = {props.navigation}
    />
  }

  function AddWordStack(props){
    return <AddWord
      onSave={(word) => {
        setWordList(wordsList.concat([word]))
      }}
       navigation={props.navigation}
    />
  }

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WordList">
          <Stack.Screen name="WordList" component={WordListStack} />
          <Stack.Screen name="CardList" component={CardListStack} />
          <Stack.Screen name="AddWord" component={AddWordStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


