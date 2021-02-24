
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {

    flexDirection: "column",
    width: "100%",
    marginBottom: 20,
    borderRadius: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

  },

  Header: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },

  info: {
    flexDirection: 'column',

  
  },
  textDoctor:{
    fontWeight:'bold',
    marginBottom:0,
  },
  textExame:{
    marginBottom:10,
    color:"grey"
  },

  DataTime:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  Data:{
    marginRight:5,
    marginLeft:7,

  }

});

export default styles