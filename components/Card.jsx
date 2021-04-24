import React, { useRef } from 'react';
import { View, StyleSheet, Pressable, Animated, PanResponder, Dimensions } from "react-native";
import { Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  flipCard: {
    padding: 0,
    height: 500,
    backgroundColor: "transparent",
    border: "none",
    perspective: 1000,
    position: "absolute"
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    boxShadow: "rgb(58 58 58 / 34%) 1px 1px 10px 1px",
  },
  flip: {
    transform: "rotateY(-180deg)"
  },
  front:{
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    "-webkit-backface-visibility": "hidden",
    backfaceVisibility: "hidden",
    borderRadius: 10,
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    "-webkit-backface-visibility": "hidden",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    borderRadius: 10,
  },
  wordContainer: {
    textAlign: "center",
    lineHeight: 450,
    textAlignVertical: "middle",
    position: "relative",
    height: 500
  },
  word: {
    display: "inline-block",
    fontWeight: "bold",
    textAlignVertical: "middle",
    fontSize: 32,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  backword: {
    display: "inline-block",
    fontWeight: "bold",
    textAlignVertical: "middle",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  cardStatus: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#b9d8e8"
  }
});

export default function Card(props){
  const state_wrong_answer = "WRONG_ANSWER";
  const state_normal = "NORMAL";
  const state_correct_answer = "CORRECT_ANSWER";

  //Props
  const word = props.word;
  const canFlip = props.canFlip;
  const index = props.index;
  const canSwip = props.canSwip;

  const { width } = Dimensions.get('window');

  //States
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [state, setState] = React.useState(state_normal);

  //Refs
  const animationValue = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if(animationValue > 0){
      Animated.timing(
        animationValue,
        {
          toValue: 1,
          duration: 100,
        }
      ).start();
    }
  }, [animationValue])

 

  var cardStyles = [styles.flipCardInner];
  if(isFlipped){
      cardStyles = [styles.flipCardInner, styles.flip];
  }

  function handleFlip(){
    if(canFlip) //se eu puder virar
      setIsFlipped(!isFlipped) //vira o cartao com o valor inverso
  }
 

  //tenta desenhar os cartoes de forma bonitinha na tela, tipo 3d
  var defaultWidth = 300;
  var widthDiff = 5;
  var topOffset = 3;
  var height = 500;
 
  var flipCardStyle = [styles.flipCard, {
    zIndex: 1000 + index,
    height: height,
    top: height * index + ((height - topOffset)*index*-1),
    width: defaultWidth + index * widthDiff,
    left: 20 - (index * widthDiff)/2, //tenta fazer o cartao ficar no maio
  }];

  if(canSwip){
    flipCardStyle.push({
      transform: [
        {
          translateX: animationValue
        }
      ]
    })
  }

  var panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return isFlipped && canSwip;
    },
    onPanResponderMove: (evt, gestureState) => {
      if(gestureState.moveX >= defaultWidth/2 + 100){
        setState(state_correct_answer)
      }else if(gestureState.moveX <= defaultWidth/2 + 100){
        setState(state_wrong_answer)
      }
      animationValue.setValue(gestureState.dx);
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      if(gestureState.moveX >= width){
        Animated.timing(
          animationValue,
          {
            toValue: 1000,
            duration: 1000,
          }
        ).start(() => {
          props.onSwipRight(index, word);
        });
      }else if(gestureState.moveX <= 0){
        Animated.timing(
          animationValue,
          {
            toValue: -1000,
            duration: 500,
          }
        ).start(() => {
          props.onSwipLeft(index, word);
        });
      }else{
        animationValue.setValue(0);
      }
    },
    onPanResponderTerminate: (evt, gestureState) => {
      animationValue.setValue(0);
    },
  });

  var cardStatusStyle = [styles.cardStatus]
  if(state == state_correct_answer){
    cardStatusStyle.push({
      backgroundColor: "green"
    });
  }else if (state == state_wrong_answer){
    cardStatusStyle.push({
      backgroundColor: "red"
    });
  }

  return (
    <Pressable onPress={() => handleFlip()}>
      <View {...panResponder.panHandlers}>
        <Animated.View style={flipCardStyle}>
          <View style={cardStyles}>
            <View style={styles.front}>
              <View style={styles.wordContainer}>
                <Paragraph style={styles.word}>{word.en.infinitive}</Paragraph>
              </View>
            </View>
            <View style={styles.back}>
              <View style={cardStatusStyle}>
                <View style={styles.wordContainer}>
                  <Paragraph style={styles.backword}>
                    <div>{word.nl.infinitive}</div>
                    <div>Perfectum: {word.nl.perfectum}</div>
                    <div>Imperfectum: {word.nl.imperfectum}</div>
                  </Paragraph>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </Pressable>
  );
}