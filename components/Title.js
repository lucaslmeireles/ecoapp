import * as React from "react";
import { StyleSheet, Text} from "react-native";

export const TextDetails = (props) => {
    return(
        <>
        <Text style={styles.title}>{props.titleText}</Text>
        <Text style={styles.paragraph}>
            lorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
            orem ipsum lorem ipsumorem ipsum lorem ipsumorem ipsum lorem ipsum
        </Text>
        </>
    )
}

const styles = StyleSheet.create({    
    title:{
        margin: 25,
        fontSize: 30,
    },
    paragraph:{
        margin: 25,
        fontSize: 16,
        textAlign: 'justify'
    },

})
