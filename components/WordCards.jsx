import React from 'react';
import WordCard from './WordCard';
import { View, StyleSheet } from "react-native";
import  {PanGestureHandler} from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 40
  },
});

export default function WordCards(props){
  const [currentIndex, setCurrentIndex] = React.useState(props.words.length-1);

  function swipHandle(word, index){
    console.info(index);
    setCurrentIndex(index);
  }

  function handleGesture(event){
    debugger;
    console.info(event);
  }

  return  (
    <View style={styles.view}>
      {props.words.map((word, wordIndex) => {
        if(wordIndex == currentIndex){
          return <PanGestureHandler
             onGestureEvent={handleGesture} 
             onHandlerStateChange={handleGesture}
            maxPointers={1}> 
            <WordCard
              key={wordIndex}
              index={wordIndex}
              canFlip={true}
              word={word}
              onSwipe={swipHandle}
              />
          </PanGestureHandler>
        }

        return <WordCard
          key={wordIndex}
          index={wordIndex}
          canFlip={false}
          word={word}
          onSwipe={swipHandle}
        />
      })}
    </View>
  );
}