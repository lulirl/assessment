import React from "react";
import {View, Text, StyleSheet} from "react-native"


function QrItem({item}) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>
                {item}
            </Text>
        </View>

      );
}
const styles = StyleSheet.create({
    item: {
        marginTop: 24,
        alignItems:"center",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor:'#95d5b2',
    }, 
    text: {
        fontSize: 20,
    }
})
export default QrItem;