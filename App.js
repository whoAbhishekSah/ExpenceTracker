import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

let totalSpent = 0

const ExpenceAmountInputBox = () => {
  const [text, setText] = useState('');
  return (
    <View style={{}}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Amount spent"
        keyboardType='number-pad'
        onChangeText={newText => { setText(newText)}}
        defaultValue={text}
      />
    </View>
  );
};

const CategoryInputBox = () => {
  const [text, setText] = useState('');
  return (
    <View style={{}}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Categories"
        maxLength={20}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expence Tracking</Text>
      <ExpenceAmountInputBox></ExpenceAmountInputBox>
      <CategoryInputBox></CategoryInputBox>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Total Expence", totalSpent, [
          {
            text: 'Revert',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])}
      />
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
