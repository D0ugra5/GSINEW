
import React from 'react';
import { Avatar, Layout, Input, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from "expo-constants";
const Header = (props) =>{

return(
  <Layout style={styles.container2} level='3'>
    <View {...props}>
      <Text category='h6'>Informações Gerais </Text>

    </View>
   </Layout>
  );

} 

export const Carteira = () => (

    <>
     <ScrollView>
        <Layout style={styles.container2} level='3'>
       
         
               
                 <Card style={styles.card}  status='primary'    header={Header}>
                 <Text style={styles.txt2}>
  

  Endereço:
          
          </Text>
                   <Card>
      <Text style={styles.txt}>
     Endereço: Rua Leon 
            
      </Text>
      <Text style={styles.txt}>
Bairro: Tambore
      
</Text>
  
<Text style={styles.txt}>
   Complemento: perto do Shopping Tambore
       
       
  </Text>
      
  </Card>

  <Text style={styles.txt2}>
  

  Cônjuge:
          
          </Text>
          <Card>
          
  <Text style={styles.txt}>

  Pai : Jose de Teste
            
      </Text>
      <Text style={styles.txt}>
Mãe:Julia Teste
  
            
</Text>
<Text style={styles.txt}>

  Filhos: Wesley Teste
            
</Text>
      </Card>


      <Text style={styles.txt2}>
  

 Sobre:
          
          </Text>
          <Card>
          
  <Text style={styles.txt}>

  Doenças/Crônicos :Sim
            
      </Text>
      <Text style={styles.txt}>
Grupo de Risco: Sim
  
            
</Text>
<Text style={styles.txt}>

  Dpoc: Sim
            
</Text>
      </Card>
    </Card>

    


   









        </Layout>
        </ScrollView>
    </>

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

export default Carteira