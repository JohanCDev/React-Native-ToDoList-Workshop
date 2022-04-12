import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <LinearGradient colors={["#FFE5D4", "#FFB5A4"]} style={styles.container}>
      <SafeAreaView style={styles.mainView}>
        <Text style={styles.title}>Todo List</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    fontWeight: "bold",
    color: "#694F5D",
    paddingHorizontal: 20,
  },
});