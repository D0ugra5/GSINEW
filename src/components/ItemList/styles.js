import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: width - 50,
    height: 40,
    borderRadius: 5,
    padding: 8,
  },
});

export default styles;
