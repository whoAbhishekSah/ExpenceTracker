import React, { useState, useForm } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <View>
      <Text>Total Amount {sum}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Amountspent"
        keyboardType='number-pad'
        onChangeText={(text) => { setAmount(text); }}
      />
      <Button
        title="Press me"
        onPress={() => {setSum(sum + Number(amount))}}
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
