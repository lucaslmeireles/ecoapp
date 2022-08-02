import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>ECOBANK</Text>
        <View style={styles.iconProfile}></View>
      </View>
  
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#eee',
        height: 67,
        marginTop: 43,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'green'
    
      },
      textHeader:{
        marginLeft: 25,
        fontSize: 22,
        color: '#03440C'
      },
      iconProfile:{
        backgroundColor: '#CCC',
        height: 45,
        width: 45,
        marginRight: 25,
        borderRadius: 45/2
      },
    
});
