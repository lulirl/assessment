import React from "react"
import {StyleSheet, View, Text,} from "react-native"

function QrList( ) {
    return ( 
       <View style={styles.body}>
        <Text style={styles.text}>QrList</Text>
       </View>
     );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    text:{
        fontSize: 20,
        fontWeight: "bold",
        margin: 10

    }
})

export default QrList