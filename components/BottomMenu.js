import * as React from "react";
import { StyleSheet, View, Pressable, Image, Button} from "react-native";
import { AntDesign } from '@expo/vector-icons'
export function BottomMenu(){
    return(
    <View style={styles.bottomButton}>
      <Pressable style={styles.bottomButton1}>
        <View >
          <AntDesign name="home" size={30} color="black" />
        </View>
        </Pressable>
        <Pressable style={styles.bottomButton2}>
        <View>
          <AntDesign name="user" size={30} color="black" />
        </View>
        </Pressable>
      </View>
  
    )
}

const styles = StyleSheet.create({
    bottomButton:{
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: 85,
        borderRadius: 12,
      },
      bottomButton1:{
        width:'30%',
        height: 40,
        borderRadius: 20,
        marginTop: 15 ,
        justifyContent: 'center',
        alignItems: 'center'
      },
      bottomButton2:{
        width:'30%',
        height: 40,
        borderRadius: 20,
        marginTop: 15 ,
        justifyContent: 'center',
        alignItems: 'center'


      },
    
})
