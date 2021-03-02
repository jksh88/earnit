import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const textList = [
  "it's good",
  'haha',
  'what up?',
  'take it easy',
  'chlll',
  'How are you',
];

export default function App() {
  const [text, setText] = useState(
    'Open up App.js to start working on your app!'
  );
  const randomText = () => {
    const rand = Math.floor(Math.random() * textList.length);
    setText(textList[rand]);
  };
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={randomText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
