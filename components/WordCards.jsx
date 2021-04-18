import React from 'react';
import WordCard from './WordCard';
import { View, StyleSheet, Animated } from "react-native";
//import  {PanGestureHandler} from 'react-native-gesture-handler'
//import  SwipableWordCard from './SwipableWordCard';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function WordCards(props){
  const [currentIndex, setCurrentIndex] = React.useState(props.words.length-1);
  const [cardList, setCardList] = React.useState(props.words);

  const [refresh, setRefresh] = React.useState(false)

  function removeLast(){
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
        var canSwip = false;

        if(wordIndex == cardList.length-1){
          canFlip = true;
          canSwip = true;  
        }

        return <WordCard
          refresh={refresh}
          key={wordIndex}
          index={wordIndex}
          canFlip={canFlip}
          canSwip={canSwip}
          word={word}
          onSwipLeft={onSwipLeft}
          onSwipRight={onSwipRight}
        />
      })}
    </View>
  );
}