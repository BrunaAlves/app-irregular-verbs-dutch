import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import './app.css';
import WordCards from './components/WordCards';

import words from './irregular-verbs.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <PaperProvider>
       <WordCards 
         words={words}
       />
    </PaperProvider>
  );
}


