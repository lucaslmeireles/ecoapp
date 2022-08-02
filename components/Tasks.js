import React , {useState, useEffect, useCallback}from "react";
import { StyleSheet, View, Pressable, Text, Image, FlatList, List } from "react-native";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function Task(){
    const data = [{
        id: '124iufhifu3',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      {
        id: '125455',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      {
        id: '1453',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      {
        id: '534637',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      {
        id: '5345353',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      {
        id: '543453438',
        title: 'Juntos pro quer der e vier pra sempre te amerei'
      },
      ]


    const Item = ({ title }) => (
        <View style={styles.itemFlatList}>
        <Pressable>
          <Text style={styles.textTask}>{title}</Text>
          <View style ={styles.circleIcon}>
            <Text style={styles.textPoints}>POINTS</Text>
          </View>
        </Pressable>
        </View>
      );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
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
        flexDirection:"column",
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        width: 350,
        height: 100,
        borderRadius: 15,
        alignItems: 'stretch',
        margin: 25
      },
    textTask: {
        fontSize:17,
        margin: 'auto',
        paddingTop: 25,
        paddingHorizontal: 35,
        flex:2 ,
        fontFamily: 'Nunito_400Regular'
        },
    circleIcon:{
        flex: 1,
        backgroundColor: 'green',
        width: 40,
        height: 40,
        },
    textPoints: {
        margin: 'auto',
        
        }
    
})