import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import {StyleSheet, View, Text,Button} from "react-native"
import { BarCodeScanner } from 'expo-barcode-scanner';
import {decodeQrAndStore} from "../actions/index"

function ReadQr( ) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();
  const qrStrings = useSelector((state) => state.QrData);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`); 
    dispatch(decodeQrAndStore(data))
    // data = JSON.parse(data)
   console.log("soy", qrStrings)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    return ( 
       <View style={styles.body}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
       </View>
     );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ReadQr