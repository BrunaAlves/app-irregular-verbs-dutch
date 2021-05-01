import React from 'react';
import Card from './Card';
import { View, StyleSheet, Animated } from "react-native";

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function CardList(props){
  const [cardList, setCardList] = React.useState(props.words);
  const [refresh, setRefresh] = React.useState(false)

  function removeLast(){ //tira do topo da lista
    cardList.pop();
    setCardList(cardList)
  }

  function onSwipLeft(wordIndex, word){
    removeLast();
    setRefresh(!refresh);
  }

  function onSwipRight(wordIndex, word){
    removeLast();
    setRefresh(!refresh);
  }

  return  (
    <View style={styles.view}>
      {cardList.map((word, wordIndex) => {
        var canFlip = false;

        if(wordIndex == cardList.length-1){ //Se for a ultima carta (carta da frente)
          canFlip = true;
        }

        return <Card
          refresh={refresh}
          key={wordIndex}
          index={wordIndex}
          canFlip={canFlip}
          word={word}
          onSwipLeft={onSwipLeft}
          onSwipRight={onSwipRight}
        />
      })}
    </View>
  );
}