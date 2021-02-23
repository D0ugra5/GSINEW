import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  containerMain: {
    height,
    flexDirection: "column",
    alignItems: "center",
    color: 'white',

  },

  div: {
   
    width:"auto",

    flexDirection:'row',
    alignItems:'center',
    
  },

  Text: {
    fontWeight: "bold",
  
    color: "white",
    marginLeft:10,
  },


  Text3: {
    color: 'black'
  },

  Text2: {
    fontSize: 8
  },


  containerProfile: {

    padding: 5,
    marginTop: 10,
    width: "88%",
    height: "30%",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#5d99c6",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,



  },


  containerInfo: {

    height: "auto",
    width: "90%",
    borderRadius: 13,
    marginTop: 20,
    padding: 10,
    alignItems: 'flex-start',
    padding: 20,

  },



  avatar: {
    width: 100,
    height: 100,
    borderRadius: 0,
  },


  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  button: {
    marginTop: 18,
    backgroundColor: '#58a5f0',
    borderWidth: 0,
  },



  txt: {
    fontSize: 15,
    marginBottom: 10,
  },



  txt2: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    alignItems: 'center'
  },




});

export default styles