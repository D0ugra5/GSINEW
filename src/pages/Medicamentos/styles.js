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

  Header: {
    width: "100%",
    height: "5%",
    
    marginTop: 40,
    paddingHorizontal: 25,
  },

  Button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
  },
  MedContinue: {
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 60,
    marginTop: 20,
    width: width,
    height: "auto",
    alignItems: "center",
    paddingVertical: 23,
    marginBottom: 40,
  },
  searchDiv: {
    width: width - 50,
    height: "auto",
    padding: 10,
    alignItems:'center',

  },
  

});

export default styles;
