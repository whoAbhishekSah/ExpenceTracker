import React, { useState, useEffect } from 'react';
import { TextInput, View, Button, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addExpences } from './utils';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Form = () => {
  const [amount, setAmount] = useState("");
  const [sum, setSum] = useState(0);

  const handleSubmit = async () => {
    Keyboard.dismiss()
    setSum(sum + Number(amount))
    setAmount("")
    await AsyncStorage.setItem('expences', String(Number(sum) + Number(amount)));
    const jsonValue = await AsyncStorage.getItem('expencesTable');
    const expencesTable = JSON.parse(jsonValue) || []
    addExpences("food", amount, expencesTable)
    await AsyncStorage.setItem('expencesTable', JSON.stringify(expencesTable));
    const updatedTable = await AsyncStorage.getItem('expencesTable');
    console.log("updated expences table", JSON.parse(updatedTable))
  }

  useEffect(() => {
    fetchValue()
  })

  const fetchValue = async () => {
    const value = await AsyncStorage.getItem('expences');
    setSum(value || 0)
  }

  return (
    <View>
      <Text>Total Spent &#8377;{sum}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter Amount spent"
        keyboardType='number-pad'
        value={amount}
        onChangeText={(text) => { setAmount(text); }}
      />
      <Button
        title="Add"
        onPress={handleSubmit}
      />
    </View>
  )
}

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Expence Tracking</Text>
    <Form></Form>
  </Layout>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  );
}
