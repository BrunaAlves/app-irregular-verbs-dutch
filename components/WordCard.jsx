import React from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
    backgroundColor: "#b9d8e8"
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
  }
});

export default function WordCard(props){
  var word = props.word;

  const [isFlipped, setIsFlipped] = React.useState(false);

  var cardStyles = [styles.flipCardInner];
  if(isFlipped){
      cardStyles = [styles.flipCardInner, styles.flip];
  }

  function handleFlip(){
    if(props.canFlip)
      setIsFlipped(!isFlipped)
  }

  var widthDiff = 10;
  var topOffset = 20;
  var height = 500;
 
  var flipCardStyle = [styles.flipCard, {
    zIndex: 1000 + props.index,
    height: height,
    top: height * props.index + ((height - topOffset)*props.index*-1),
    width: 300 + props.index * widthDiff,
    left: 20 - (props.index * widthDiff)/2
  }]


  return (
    <Pressable onPress={() => handleFlip()}>
      <View style={flipCardStyle}>
        <View style={cardStyles}>
          <View style={styles.front}>
            <View style={styles.wordContainer}>
              <Paragraph style={styles.word}>{word.en.infinitive}</Paragraph>
            </View>
          </View>
          <View style={styles.back}>
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
    </Pressable>
  );
}