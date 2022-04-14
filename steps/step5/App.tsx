import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image, LayoutAnimation, Animated, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Task from './Components/Task'

interface BottomProps {
  task: string
  setTask: Function
  addTask: Function
}

interface ListProps {
  allTasks: Array<string>
}


function BottomScreen(props: BottomProps)
{
  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
  >
      <TextInput style={styles.input} placeholder={'Write a task'} value={props.task} maxLength={50} onChangeText={text => props.setTask(text)} returnKeyType="send" onSubmitEditing={() => props.addTask()} />
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
    {
      props.allTasks.map((item, index) => {
        return (
          <Task text={item} index={index}/>
        )
      }
      )
    }
  </ScrollView>
  )
}

export default function App() {
  const [task, setTask] = useState("")
  const [allTasks, setAllTasks] = useState<Array<string>>([])

  const addTask = () => {
    Keyboard.dismiss();
    if (!(task.length === 0 || task.trim().length === 0))
      setAllTasks([...allTasks, task])
    setTask("")
  }

  return (
    <LinearGradient colors={["#FFE5D4", "#FFB5A4"]} style={styles.container}>
      <SafeAreaView style={styles.mainView}>
        <Text style={styles.title}>Todo List</Text>
        <DisplayList allTasks={allTasks}/>
        <BottomScreen task={task} setTask={setTask} addTask={addTask} />
      </SafeAreaView>
      <StatusBar style="auto"/>
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
});