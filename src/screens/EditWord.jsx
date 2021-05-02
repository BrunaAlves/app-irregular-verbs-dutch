import React from 'react';
import { View } from "react-native";
import { TextInput, Button, Colors } from 'react-native-paper';

export default function EditWord(props) {
  const [infinitiveEN, setInfinitiveEN] = React.useState(props.item.en.infinitive);
  const [infinitiveNL, setInfinitiveNL] = React.useState(props.item.nl.infinitive);
  const [perfectumNL, setperfectumNL] = React.useState(props.item.nl.perfectum);
  const [imperfectumNL, setImperfectumNL] = React.useState(props.item.nl.imperfectum);

  function save() {
    props.onEdit({
      "id": props.item.id, 
      "en": {
        "infinitive": infinitiveEN
      },
      "nl": {
        "infinitive": infinitiveNL,
        "perfectum": perfectumNL,
        "imperfectum": imperfectumNL
      },
      "data": {
        "wrongAnswerCount": props.item.data.wrongAnswerCount,
        "correctAnswerCount": props.item.data.correctAnswerCount
      }
    })
    props.navigation.navigate('WordList');

  }

  return (
    <View>
      <TextInput
        label="Infinitive verb in English"
        value={infinitiveEN}
        onChangeText={text => setInfinitiveEN(text)}
      />
      <TextInput
        label="Infinitive verb in Dutch"
        value={infinitiveNL}
        onChangeText={text => setInfinitiveNL(text)}
      />
      <TextInput
        label="Perfectum"
        value={perfectumNL}
        onChangeText={text => setperfectumNL(text)}
      />
      <TextInput
        label="Imperfectum"
        value={imperfectumNL}
        onChangeText={text => setImperfectumNL(text)}
      />
      <Button icon="content-save" mode="contained" onPress={() => save()}>
        Save
  </Button>
  <Button icon="keyboard-backspace" mode="contained" color={Colors.blue800} onPress={() => props.navigation.navigate("WordList")}>Back to verbs list</Button>
    </View>

  );
};
