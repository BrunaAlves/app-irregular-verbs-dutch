import React from 'react';
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    height: 500,
  },
  word: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center"
  }
});

export default function WordCard(props){
  var word = props.word;
  return (
      <Card style={styles.card} class="flip-card">
        <Card.Content class="flip-card-inner">
          <View class="flip-card-front">
            <Paragraph style={styles.word}>{word.en.infinitive}</Paragraph>
          </View>
          <View>
            ashduasduashd
          </View>
        </Card.Content>
      </Card>
  );
}