import React from "react";
import { StyleSheet, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar'
import { BottomMenu } from "../components/BottomMenu";
import Header from "../components/Header";
import Task from "../components/Tasks";

const HomePage = () => {



  return (
    <>
    <StatusBar></StatusBar>
    <Header></Header>
    <View style={styles.container}>
      <Task></Task>
      <BottomMenu></BottomMenu>
    </View >
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    width: '100%',
    height: '77%',

  },
})
export default HomePage;