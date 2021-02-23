import React from 'react'

import {View, TextInput,StyleSheet} from 'react-native'
import { Feather } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.SearchContainer}>

      <Feather name="search" color="#5d99c6" size={14} />
      <TextInput style={styles.inputStyle} placeholder="Digite um medicamento" />
    </View>
  )
}

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
   
   alignItems:"center",
   justifyContent:"center",
   paddingHorizontal:13,
   backgroundColor:"white",
   borderRadius:20,
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 0.0,
   shadowRadius: 5,
   elevation: 3,
   marginBottom:13,
  
  },
  inputStyle: {
    flex: 1,
    padding:10,
  },
})

