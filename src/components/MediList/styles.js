import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: width - 50,
    height: 95,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.0,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "column",
    padding: 10,
    
    justifyContent: "space-between",
  },
  Divtitle: {
    width: "100%",
    height: "40%",
   
  },
  DivInfo:{
    width: "100%",
    height: "40%",
   
    alignItems:'flex-end',
    flexDirection:"row-reverse"
  },
  TextInfo:{
      fontSize:13,
  }
});

export default styles;
