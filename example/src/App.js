import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import TextHighlight from 'react-native-text-highlight';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>STesting</Text>
      <TextHighlight/>
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
