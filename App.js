import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, Keyboard,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Form() {
  const [amount, setAmount] = useState('');
  const [sum, setSum] = useState(0);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setSum(sum + Number(amount));
    setAmount('');
  };

  return (
    <View>
      <Text>
        Total Amount
        {sum}
      </Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter Amount spent"
        keyboardType="number-pad"
        value={amount}
        onChangeText={(text) => { setAmount(text); }}
      />
      <Button
        title="Add"
        onPress={handleSubmit}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expence Tracking</Text>
      <Form />
    </View>
  );
}
