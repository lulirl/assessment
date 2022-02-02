import React, {useState} from "react"
import { useSelector } from "react-redux";
import {StyleSheet, View, Text,FlatList, TextInput} from "react-native"

function QrList( ) {
    var qrStrings = useSelector((state) => state.QrData);
  
    return ( 
       <View style={styles.body}>
        <Text>Qr List</Text>
       </View>
     );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
  
    
})

export default QrList