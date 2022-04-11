import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps {
    text: string;
    removeFunction: (index: number) => void;
    index: number
    color: string
}

export default function Task(props: TaskProps) {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, {backgroundColor: props.color}]}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPressOut={() => props.removeFunction(props.index)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#EFC7C2',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#68A691',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#694F5D",
  },
  circular: {
    width: 24,
    height: 24,
    borderColor: '#694F5D',
    borderWidth: 2,
    borderRadius: 12,
  },
});