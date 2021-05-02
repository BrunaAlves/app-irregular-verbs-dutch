import React from 'react';
import Card from '../components/Card';
import { View, StyleSheet, Text } from "react-native";
import { Button, Colors } from "react-native-paper"

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function CardList(props) {
  const [cardList, setCardList] = React.useState([].concat(props.words)); //tenta duplicar a lista porque tava com bug

  const [wrongAnswers, setWrongAnswers] =  React.useState(0);
  const [correctAnswers, setCorrectAnswers] =  React.useState(0);

  function removeLast() { //tira do topo da lista
    cardList.pop();
    setCardList([].concat(cardList))
  }

  function onWrongAnswer(word) {
    word.data.wrongAnswerCount++;
    setWrongAnswers(wrongAnswers+1);
    removeLast();
  }

  function onCorrectAnswer(word) {
    word.data.correctAnswerCount++;
    setCorrectAnswers(correctAnswers+1);
    removeLast();
  }

  function endShuffle(){
    props.finishShuffle({});
    props.navigation.navigate("WordList");
  }

  if (cardList.length == 0) {
    return <View style={{marginTop: 250,}}>
      <Text style={{fontSize: 30, left:"25%", bottom: 50}}>Got it: {correctAnswers}</Text>
      <Text style={{fontSize: 30, left:"25%", bottom: 50}}>Study Again: {wrongAnswers}</Text>
      <Button icon="keyboard-backspace" mode="contained" color={Colors.blue800} onPress={() => endShuffle()}>Back to verbs list</Button>
    </View>
  } else {

    return (
      <View style={styles.view}>
        {cardList.map((word, wordIndex) => {
          var canFlip = false;

          if (wordIndex == cardList.length - 1) { //Se for a ultima carta (carta da frente)
            canFlip = true;
          }

          return <Card
            key={wordIndex}
            index={wordIndex}
            canFlip={canFlip}
            word={word}
            onCorrectAnswer={onCorrectAnswer}
            onWrongAnswer={onWrongAnswer}
          />
        })}
      </View>
    );
  }
}