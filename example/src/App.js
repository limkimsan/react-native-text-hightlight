import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import TextHighlight from 'react-native-text-highlight';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>STesting</Text>
      <TextHighlight textToHighlight='ការផ្ដល់សេវាសំបុត្រកំណើត សំបុត្រអាពាហ៍ពិពាហ៍ និងសំបុត្រមរណភាព' searchWords={["សំបុត្រ"]}
        fontSize={15}
      />
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
