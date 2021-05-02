import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import CardList from './src/screens/CardList';
import Home from './src/screens/Home';
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

  function HomeStack(props){
    return <Home
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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="CardList" component={CardListStack} />
          <Stack.Screen name="AddWord" component={AddWordStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


