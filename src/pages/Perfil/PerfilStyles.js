
import { StyleSheet } from 'react-native';
import Constants from "expo-constants"
const styles = StyleSheet.create({
    container2: {
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        marginTop: 50,
        borderColor:"#03a9f4",
        borderWidth:1,
        marginTop: Constants.statusBarHeight,
      },
      avatar: {
        width: 150,
        height: 150,
        margin: 8,
      },
      campos: {
    
        borderColor:"#7986cb",
        borderWidth:1,
        padding: 10,
        marginTop: 50,
      },
    });


export default styles