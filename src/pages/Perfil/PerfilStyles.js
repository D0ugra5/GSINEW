import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    color:'white'
  },
  Text: {
    fontWeight: "bold",
    color:"white"
  },
  Text3:{
      color:'white'
  },
  Text2: {
    
    fontSize:17
  },

  containerBody: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: width,
    height: "97%",
    alignItems:"center",
  },
  containerInfo:{
    
    width: width - 20,
    height: "60%",
    borderRadius:10,
    marginTop:20,
    padding:10,
    alignItems:'center'
    
    

  },

  containerProfile: {
    width,
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 27,
    borderBottomLeftRadius: 27,

    backgroundColor: "#5d99c6",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 10
  },

  avatar: {
    width: 80,
    height: 80,
  },
  campos: {
    padding: 10,
    marginTop: 50,
  },
});

export default styles;
