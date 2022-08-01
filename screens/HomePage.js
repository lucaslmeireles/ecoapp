import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, FlatList, List } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLoading from 'expo-app-loading'
import { useFonts } from "expo-font";

const HomePage = () => {
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
  let [fonstLoaded] = useFonts({
    'Nunito': require('../assets/Fonts/Nunito_regular.ttf')
  })
  if (!fonstLoaded) {
    return <AppLoading></AppLoading>
  }

  const Item = ({ title }) => (
    <View style={styles.itemFlatList}>
    <Pressable>
      <Text style={styles.textTask}>{title}</Text>
        <Text style={styles.textPoints}>POINTS</Text>
    </Pressable>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  return (
    <View style={styles.container}>
      <View style={styles.containerFlatList}>
        <FlatList data={data} renderItem={renderItem} keyEstractor={item => item.id} style={styles.flatListView}>
        </FlatList>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    width: '100%',
    height: 700,
    marginTop: 60,

  },
  itemFlatList: {
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    width: 350,
    height: 100,
    borderRadius: 15,
    alignItems: 'stretch',
    margin: 25
  },
  textTask: {
    fontFamily:'Nunito',
    fontSize:17,
    margin: 'auto',
    paddingTop: 25,
    paddingHorizontal: 35,
    },
    circleIcon:{
        flex: 1,
        color: 'green',
        width: 25,
        height: 27,
    },
    textPoints: {
        fontFamily:'Nunito',
        fontSize:12,
        margin: 'auto',
    
    }

})

export default HomePage;