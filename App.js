import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addExpences } from './utils';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IndexPath, Select, SelectItem } from '@ui-kitten/components';

const Form = () => {
  const [amount, setAmount] = useState("");
  const [sum, setSum] = useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = ['groceries', 'online-food', 'travel', 'trips', 'electronics', 'family', 'others']

  const handleSubmit = async () => {
    Keyboard.dismiss()
    setSum(sum + Number(amount))
    setAmount("")
    await AsyncStorage.setItem('expences', String(Number(sum) + Number(amount)));
    const jsonValue = await AsyncStorage.getItem('expencesTable');
    const expencesTable = JSON.parse(jsonValue) || []
    addExpences(data[selectedIndex.row], amount, expencesTable)
    await AsyncStorage.setItem('expencesTable', JSON.stringify(expencesTable));
    const updatedTable = await AsyncStorage.getItem('expencesTable');
    console.log("updated expences table", JSON.parse(updatedTable))
  }

  useEffect(() => {
    fetchValue()
  })

  const displayValue = data[selectedIndex.row];

  const renderOption = (title) => (
    <SelectItem title={title} />
  );

  const fetchValue = async () => {
    const value = await AsyncStorage.getItem('expences');
    setSum(value || 0)
  }

  return (
    <Layout
      style={styles.container}
      level='1'
    >
      <Text>Total Spent &#8377;{sum}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter Amount spent"
        keyboardType='number-pad'
        value={amount}
        onChangeText={(text) => { setAmount(text); }}
      />
      <Select
        selectedIndex={selectedIndex}
        value={displayValue}
        onSelect={index => setSelectedIndex(index)}
      >
        {data.map(renderOption)}
      </Select>
      <Button
        title="Add"
        onPress={handleSubmit}
      />
    </Layout>
  )
}

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center' }}>
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

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
