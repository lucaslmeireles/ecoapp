import React , {useState, useEffect, useCallback}from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function Task(props){
    const data = [{
        id: '124iufhifu3',
        title: 'TESTE',
        points: '1234'

      },
      {
        id: '125455',
        title: 'TESTE',
        points: '1234'
      },
      {
        id: '1453',
        title: 'TESTE',
        points: '1234'

      },
      {
        id: '534637',
        title: 'TESTE',
        points: '1234'

      },
      {
        id: '5345353',
        title: 'TESTE',
        points: '1234'

      },
      {
        id: '543453438',
        title: 'TESTE',
        points: '0,25'

      },
      ]


    const renderItem = ({ item }) => (
      // onPress={task title={item.title}}
    <TouchableOpacity onPress={props.onPress} style={styles.itemFlatList}>
        <Text style={styles.textTask}>{item.title}</Text>
        <Image></Image>
    </TouchableOpacity>

      );
    return(
        <View style={styles.containerFlatList}>
          <FlatList data={data} renderItem={renderItem} keyEstractor={item => item.id} style={styles.flatListView}>
          </FlatList>
        </View>  
    )
}

const styles = StyleSheet.create({
    itemFlatList: {
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        width: 350,
        height: 100,
        borderRadius: 15,
        alignItems: 'stretch',
        margin: 25,
        overflow: 'hidden',
        shadowColor: 'balck',

      },
    textTask: {
        fontSize:17,
        margin: 'auto',
        paddingTop: 25,
        paddingHorizontal: 35,
        flex:2 ,
        fontFamily: 'Nunito_400Regular',
        alignContent: 'center',

        },
    circleIcon:{
        marginTop: 15,
        marginRight:25,
        height: 70,
        width: 70,
        borderRadius: 45,
        justifyContent:'center',
        alignContent: 'center',

        },
    textPoints: {
        marginLeft: 18
        }
    
})