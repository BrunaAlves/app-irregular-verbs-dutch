import React from 'react';
import { View } from "react-native";
import { TextInput, Button } from 'react-native-paper';

export default function AddWord(props) {
  const [infinitiveEN, setInfinitiveEN] = React.useState(props.item ? props.item.en.infinitive : "");
  const [infinitiveNL, setInfinitiveNL] = React.useState(props.item ? props.item.nl.infinitive : "");
  const [perfectumNL, setperfectumNL] = React.useState(props.item ? props.item.nl.perfectum : "");
  const [imperfectumNL, setImperfectumNL] = React.useState(props.item ? props.item.en.imperfectum : "");

  function save() {
    props.onSave({
      "en": {
        "infinitive": infinitiveEN
      },
      "nl": {
        "infinitive": infinitiveNL,
        "perfectum": perfectumNL,
        "imperfectum": imperfectumNL
      },
      "data": {
        "wrongAnswerCount": 0,
        "correctAnswerCount": 0
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
    </View>

  );
};
