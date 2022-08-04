import * as React from "react";
import { StyleSheet, View, Image} from "react-native";

export const MapFigure = () => {
    return(
        <View style={styles.map}>
            <Image></Image>
        </View>

    )
}

const styles = StyleSheet.create({    
    map:{
        width: 300,
        height: 300,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginLeft: 44,
    },
})
