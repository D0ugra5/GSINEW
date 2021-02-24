
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height


const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",


  },
  Header: {
   
    alignSelf: 'center',

    padding: 20,
    width,

    justifyContent: 'center'
  },

  containerCard: {
    borderTopEndRadius:55,
    borderTopStartRadius:55,
    
    padding: 23,
    flex: 1,
    height,
    flexDirection: "column",


  },

  select: {
    marginTop: 10,
    height: 50,
  },
  txt: {

    alignSelf: 'center'

  },
  card: {

    width: "100%",

  }

});

export default styles