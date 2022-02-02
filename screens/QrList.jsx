import React, {useState} from "react"
import { useSelector } from "react-redux";
import {StyleSheet, View, Text,FlatList, TextInput} from "react-native"
import QrItem from "./QrItem";


function QrList( ) {
    const qrStrings = useSelector((state) => state.QrData);
    const [search, setSearch] = useState("")
   
    const filteredData = search ? qrStrings.filter((x)=> x.toLowerCase().includes(search.toLowerCase())) : qrStrings
    

    return ( 
       <View style={styles.body}>
        <TextInput style={styles.input}
        placeholder="Search QR Text..."
        onChangeText={(value)=> setSearch(value)}
        value={search}/>
        {filteredData.length > 0 ? 
        <FlatList
        style={styles.list}
        keyExtractor={(item, index) => index.toString()}
        data={filteredData}
        renderItem={({item})=> (
            // <Text style={styles.item}>{item}</Text>
            <QrItem item={item}/>
        )}/> : <Text style={styles.text}>No Qr found</Text>
}
       </View>
     );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
    }, 
    input:{
        borderWidth: 5, 
        borderRadius:10,
        borderColor: "#52b788",
        padding: 15, 
        margin: 10,
        width: "100%" 
    }, 
    list:{
        width: "100%"
    },
    text: {
        fontSize: 20,
        paddingVertical: 15,
    }
})

export default QrList