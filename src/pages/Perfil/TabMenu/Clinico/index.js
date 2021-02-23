import React from 'react'
import {  Layout, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
;
const Header = (props) =>{

return(
  <Layout style={styles.container2} level='3'>
    <View {...props}>
      <Text category='h6'>Clinicos </Text>

    </View>
   </Layout>
  );

} 

export const Clinico = () => (

    
     <ScrollView>
        <Layout style={styles.container2} level='3'>
       
         
               
                 <Card style={styles.card}  status='primary'    header={Header}>
                 <Text style={styles.txt2}>
  

  Clinicos:
          
          </Text>
                   <Card>
      <Text style={styles.txt}>
      Doenças/Crônicos: sim
            
      </Text>
      <Text style={styles.txt}>
      Grupo de Risco: Sim
      
</Text>
  
<Text style={styles.txt}>
DPOC: Todos
       
       
  </Text>
      
  </Card>

  </Card>






        </Layout>
        </ScrollView>
    

);

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: "column",
        alignItems:'center',
        

    },

    Ccard: {
        margin: 10,
        bottom: 0,
        height: "22%",
        width: "100%",
     
   

    },
    card:{
        marginTop:30,
      width:"100%",


    },

    txt:{
          fontSize:20,
        marginBottom:10,
    },
    
    txt2:{
      fontSize:30,
    marginBottom:10,
    fontWeight:'bold'
}

});

export default Clinico