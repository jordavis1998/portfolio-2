import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from './greeting.jpg'
import LoginApp from './LoginApp';


export default function App() {
  return (
    <View style={styles.container}>
      <img src={Image}></img>
      <br></br>
      <LoginApp/>
      <StatusBar style='auto'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
