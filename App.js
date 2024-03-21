import React, { useState, useForm } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

global.totalSpent = 0

const Form = () => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    global.totalSpent += amount;
  }

  return (
    <View>
      <Text>Total amount {amount}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Amount spent"
        keyboardType='number-pad'
        onChangeText={(text) => { setAmount(text); }}
      />
      <Button
        title="Press me"
        onPress={handleSubmit}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expence Tracking</Text>
      <Text>Sum {global.totalSpent}</Text>
      <Form></Form>
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
