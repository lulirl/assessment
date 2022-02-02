import React, {useState} from "react"
import { useSelector } from "react-redux";
import {StyleSheet, View, Text,FlatList, TextInput} from "react-native"

function QrList( ) {
    var qrStrings = useSelector((state) => state.QrData);
    const [search, setSearch] = useState("")
    return ( 
       <View style={styles.body}>
        <TextInput style={styles.input}
        placeholder="search..."
        onChangeText={(value)=> setSearch(value)}/>
        <Text>{search}</Text>
        <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={qrStrings}
        renderItem={({item})=> (
            <Text style={styles.item}>{item}</Text>
        )}/>
       </View>
     );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    input:{
        borderWidth: 1, 
        borderColor: "black",
        padding: 8, 
        margin: 10,
        width: 200 

    }, 
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "blue",
        fontSize: 24
    }
})

export default QrList