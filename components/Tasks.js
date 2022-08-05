import React , {useState, useEffect, useCallback}from "react";
import { StyleSheet, View, Pressable, Text, Image, FlatList, List } from "react-native";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function Task(props){
    const data = [{
        id: '124iufhifu3',
        title: 'Juntos pro quer der e vier pra sempre te amerei ola marilene como voce vai tudo bem contigo e aiaiaiaiaiaiaiaiai',
        points: '1234'

      },
      {
        id: '125455',
        title: 'Juntos pro quer der e vier pra sempre te amerei',
        points: '1234'
      },
      {
        id: '1453',
        title: 'Juntos pro quer der e vier pra sempre te amerei',
        points: '1234'

      },
      {
        id: '534637',
        title: 'Juntos pro quer der e vier pra sempre te amerei',
        points: '1234'

      },
      {
        id: '5345353',
        title: 'Juntos pro quer der e vier pra sempre te amerei',
        points: '1234'

      },
      {
        id: '543453438',
        title: 'Juntos pro quer der e vier pra sempre te amerei',
        points: '0,25'

      },
      ]


    const renderItem = ({ item }) => (
      // onPress={task title={item.title}}
    <Pressable onPress={props.onPress} style={styles.itemFlatList}>
        <Text style={styles.textTask}>{item.title}</Text>
        <View style ={styles.circleIcon}>
          <Text style={styles.textPoints}>{item.points}</Text>
        </View>
    </Pressable>

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
        backgroundColor: 'red',
        width: 350,
        height: 100,
        borderRadius: 15,
        alignItems: 'stretch',
        margin: 25,
        overflow: 'hidden',

      },
    textTask: {
        fontSize:17,
        margin: 'auto',
        paddingTop: 14,
        paddingHorizontal: 35,
        flex:2 ,
        fontFamily: 'Nunito_400Regular',
        alignContent: 'center',

        },
    circleIcon:{
        marginTop: 15,
        marginRight:25,
        backgroundColor: 'green',
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