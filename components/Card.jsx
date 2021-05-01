import React from 'react';
import { View, StyleSheet, Pressable, Text } from "react-native";

const styles = StyleSheet.create({
  flipCard: {
    padding: 0,
    height: 500,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  flipCardInner: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  front:{
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  back: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  frontContent: {
    fontWeight: "bold",
    marginTop: 200,
    fontSize: 32,
    height: 50,
    width: "100%",
    textAlign: "center",
  },
  backContent: {
    marginTop: 180,
  },
  backContentText: {
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  }
});

export default function Card(props){
  //Props
  const word = props.word;
  const canFlip = props.canFlip;
  const index = props.index;

  //States
  const [isFlipped, setIsFlipped] = React.useState(false);

  function handleFlip(){
    if(canFlip){ //se eu puder virar
      setIsFlipped(!isFlipped) //vira o cartao com o valor inverso
    }
  }

  //tenta desenhar os cartoes de forma bonitinha na tela, tipo 3d
  var defaultWidth = 300;
  var widthDiff = 5;
  var topOffset = 3;
  var height = 500;
 
  var flipCardStyle = [styles.flipCard, {
    zIndex: 1000 + index,
    height: height,
    width: defaultWidth + index * widthDiff,
    marginTop:  (index * height * -1) + index * topOffset,
    marginLeft: 20 - (index * widthDiff)/2, //tenta fazer o cartao ficar no maio
  }];

  return (
    <View style={flipCardStyle}>
      <Pressable onPress={() => handleFlip()}>
        <View style={styles.flipCardInner}>
          {!isFlipped && 
            <View style={styles.front}>
              <Text style={styles.frontContent}>{word.en.infinitive}</Text>
            </View>
          }
          {isFlipped && 
            <View style={styles.back}>
              <View style={styles.backContent}>
                <Text style={styles.backContentText}>{word.nl.infinitive}</Text>
                <Text style={styles.backContentText}>Perfectum: {word.nl.perfectum}</Text>
                <Text style={styles.backContentText}>Imperfectum: {word.nl.imperfectum}</Text>
              </View>
            </View>
          }       
        </View>
      </Pressable>
    </View>
  );
} 