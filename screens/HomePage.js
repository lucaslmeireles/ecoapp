import React from "react";
import { Button, StyleSheet, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar'
import { BottomMenu } from "../components/BottomMenu";
import Header from "../components/Header";
import Task from "../components/Tasks";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <>
    <StatusBar></StatusBar>
    <Header></Header>
    <View style={styles.container}>
      <Task></Task> 
      <Button title="Teste" onPress={() => navigation.navigate("TaskDetail")}></Button>
      <BottomMenu></BottomMenu>
    </View >
    </>
  );
};
//Task item.id que vai buscar o post la no api pra renderizar no taskdetails
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    width: '100%',
    height: '77%',

  },
})
export default HomePage;