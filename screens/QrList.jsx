import React, {useState} from "react"
import { useSelector } from "react-redux";
import {StyleSheet, View, Text,FlatList, TextInput} from "react-native"


function QrList( ) {
    var qrStrings = useSelector((state) => state.QrData);
    const [search, setSearch] = useState("")
   
    const filteredData = search ? qrStrings.filter((x)=> x.toLowerCase().includes(search.toLowerCase())) : qrStrings
    

    return ( 
       <View style={styles.body}>
        <TextInput style={styles.input}
        placeholder="Search QR Text..."
        onChangeText={(value)=> setSearch(value)}
        value={search}/> 
        <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filteredData}
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
        borderWidth: 5, 
        borderRadius:10,
        borderColor: "#00C9F5",
        padding: 8, 
        margin: 10,
        width: 300 

    }, 
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor:'#00C9F5',
        fontSize: 20,
     
    }
})

export default QrList