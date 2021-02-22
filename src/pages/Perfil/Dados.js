import React,{useState} from "react";

import {TabBar,Tab, Avatar, Layout, Text,Modal,Button,Card } from "@ui-kitten/components";
import { StyleSheet, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import qrcode from "../../../assets/qrcode.jpeg";
import ItemList from "../../components/ItemList";

const Dados  =  ()=>{

    const [visible, setVisible] = useState(false);
return(
    <>
    <ScrollView>
<Layout style={styles.containerMain} level="1">
 
 <Layout style={styles.containerBody} level="1">
   <Layout style={styles.containerProfile}>
     
     <Avatar
       style={styles.avatar}
       size="giant"
       source={require("../../../assets/cicero.png")}
     />
     <Text category="h4" style={styles.Text}>
      Cicero Teiceira 
     </Text>
     <Text style={styles.Text3}>RG:12.223.444-8 | CPF:45.667.778-4</Text>
     <Button style={styles.button} onPress={() => setVisible(true)}>
         Exibir QrCode
     </Button>
   </Layout>

   <Layout style={styles.containerInfo} level="1">
   <Card  status='primary'>
   <Text style={styles.txt2}>
  

 Informações :
          
          </Text>
                   <Card>
      <Text style={styles.txt}>
      CNS/SUS: 905068959393959349848939
      </Text>
      <Text style={styles.txt}>
      Tel:999999999999
      
</Text>
  
<Text style={styles.txt}>
Celular: 99999999
       
       
  </Text>

  <Text style={styles.txt}>
Obs: Necessita de medicamentos restritos, paciente de nivel critico,
ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa 
Obs: Necessita de medicamentos restritos, paciente de nivel critico,
ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa 
Obs: Necessita de medicamentos restritos, paciente de nivel critico,
ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa 

       
       
  </Text>
      
  </Card>
</Card>

   </Layout>

 </Layout>
 

 <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}
          >
            <Card disabled={true} style={styles.card}>
              <Image source={qrcode} style={{ width: 180, height: 180, marginBottom:10 }} />

              <Button onPress={() => setVisible(false)}>Ok !</Button>
            </Card>
          </Modal>
      
</Layout>
</ScrollView>
</>
);

}
const styles = StyleSheet.create({
    containerMain: {
      height:1000,
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
      borderWidth:1,
      borderColor:'#000',
      alignItems:"center",
    },
    containerInfo:{
        borderWidth:1,
        borderColor:'#000',

      height: "80%",
      borderRadius:10,
      marginTop:20,
      padding:10,
      alignItems:'center'
      
      
  
    },
  
    containerProfile: {
       borderWidth:1,
      borderColor:'#000',
      width,
      height: "25%",
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
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      button:{
        marginTop:10,
        backgroundColor:'#58a5f0',
        borderWidth:0,
      },
    card:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1
    },
    card:{
        width:'80%',
        marginTop:30,
      width:"100%",


    },

    txt:{
          fontSize:15,
        marginBottom:10,
    },
    
    txt2:{
      fontSize:30,
    marginBottom:10,
    fontWeight:'bold'
}
  });
  
export default Dados