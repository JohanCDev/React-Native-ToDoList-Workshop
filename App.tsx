import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';
import Task from './Components/Task'

interface BottomProps {
  task: string
  setTask: Function
  addTask: Function
  selectedColor: string
  setSelectedColor: (color: string) => void
}

interface ListProps {
  allTasks: Array<string>
  removeTask: (index: number) => void
  selectedColor: string
}


function BottomScreen(props: BottomProps)
{
  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
  >
      <TextInput style={styles.input} placeholder={'Write a task'} value={props.task} maxLength={50} onChangeText={text => props.setTask(text)} />
      <TouchableOpacity onPress={() => props.addTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
  </KeyboardAvoidingView>)
}

function DisplayList(props: ListProps)
{
  return (<ScrollView>
    <View style={styles.tasksWrapper}>
      {
        props.allTasks.map((item, index) => {
          return (
          <View key={index}>
            <Task text={item} removeFunction={() => props.removeTask(index)} color={props.selectedColor} index={index}/>
          </View>)
        }
        )
      }
    </View>
  </ScrollView>
  )
}


export default function App() {
  const [task, setTask] = useState("")
  const [selectedColor, setSelectedColor] = useState("#8BC34A")
  const [allTasks, setAllTasks] = useState<Array<string>>([])

  const addTask = () => {
    Keyboard.dismiss();
    setAllTasks([...allTasks, task])
    setTask("")
  }

  const removeTask = (index: number) => {
    let copyItems = [...allTasks]
    copyItems.splice(index, 1)
    setAllTasks(copyItems)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {allTasks.length > 0 && <DisplayList allTasks={allTasks} removeTask={removeTask} selectedColor={selectedColor}/>}
      {allTasks.length === 0 &&
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}

        style={styles.imageWrapper}
      >
        <Image source={require("./assets/illustration.png")} style={styles.image}/>
      </KeyboardAvoidingView>}
      <BottomScreen task={task} setTask={setTask} addTask={addTask} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5D4',
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    fontWeight: "bold",
    color: "#694F5D",
    paddingHorizontal: 20,
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    backgroundColor: '#EFC7C2',
    borderRadius: 60,
    borderColor: '#68A691',
    borderWidth: 1,
    width: "70%",
    color: "#694F5D",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#EFC7C2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#68A691',
    borderWidth: 1,
  },
  addText: {
    color: '#694F5D',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: "90%",
    resizeMode: "contain",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  }
});