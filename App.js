import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
//import './app.css';
import CardList from './components/CardList';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
  function CardListStack(){
    return <CardList 
      words={[{
        "en": {
          "infinitive": "To Begin"
        },
        "nl": {    
          "infinitive": "Beginnen",
          "perfectum": "Begonnen",
          "imperfectum": "Begon, Begonnen"
        }
      },{
        "en": {
          "infinitive": "To Understand"
        },
        "nl": {
          "infinitive": "Begrijpen",
          "perfectum": "Begrepen",
          "imperfectum": "Begreep, Begrepen"
        }
      }]} 
    />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CardList" component={CardListStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


