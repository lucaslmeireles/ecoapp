import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import {StatusBar} from 'expo-status-bar'
import { BottomMenu } from "../components/BottomMenu";
import { TextDetails } from "../components/Title";
import { MapFigure } from "../components/Map";

export function TaskDetail(props){
    const getData = (id) => {
        async () => {
            try {
                const data = await axios.get(props.id)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <>
        <StatusBar></StatusBar>
        <Header></Header>
        <View style={styles.container}>
        <ScrollView>
                <TextDetails titleText={'Teste'}></TextDetails>
                <MapFigure></MapFigure>

                <View style={styles.buttonRow}>
                <Button title="me leve ate la"></Button>
                <Button title="qrcode"></Button>
                </View>
                
            </ScrollView>
            <BottomMenu></BottomMenu>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'flex-start',
        width: '100%',
        height: '77%',
        flex: 1,
    
      },
    title:{
        margin: 25,
        fontSize: 30,
    },
    paragraph:{
        margin: 25,
        fontSize: 16,
        textAlign: 'justify'
    },
    map:{
        width: 300,
        height: 300,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginLeft: 44,

    },
    buttonRow:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50,
        paddingBottom: 60
    }

})