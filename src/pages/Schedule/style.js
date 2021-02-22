import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#5d99c6",
  },
  Title: {
    color: "white",
    fontWeight:'bold',
    marginTop:70,
    marginLeft:30,
  },
  MedContinue:{
      borderTopLeftRadius:60,
      borderBottomRightRadius:60,
      marginTop:20,
      width:width,
      height:"80%",
      alignItems:'center',
      paddingVertical:23

  }
});

export default styles;
