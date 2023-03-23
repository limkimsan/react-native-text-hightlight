import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import TextHighlight from 'react-native-text-highlight';

export default function App() {
  return (
    <View style={styles.container}>
      <TextHighlight textToHighlight='The quick brown fox jumps over the lazy dog' searchWords={["the", "fox"]} fontSize={15}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
