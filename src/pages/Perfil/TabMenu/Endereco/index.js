import React from 'react'
import {  Layout, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
;
const Header = (props) =>{

return(
  <Layout style={styles.container2} level='3'>
    <View {...props}>
      <Text category='h6'>Endereços </Text>

    </View>
   </Layout>
  );

} 

export const Endereco = () => (

    <>
     <ScrollView>
        <Layout style={styles.container2} level='3'>
       
         
               
                 <Card style={styles.card}  status='primary'    header={Header}>
                 <Text style={styles.txt2}>
  

                 Endereços:
          
          </Text>
                   <Card>
      <Text style={styles.txt}>
      Rua: Rua tambore 1
            
      </Text>
      <Text style={styles.txt}>
      Bairro:  tambore 1
</Text>
  
<Text style={styles.txt}>
Cidade: Barueri 
       
  </Text>
  <Text style={styles.txt}>
Cep: 06704315 

</Text>
  </Card>

 
  <Text style={styles.txt2}>
  

  Endereços 2:

</Text>
    <Card>
<Text style={styles.txt}>
Rua: Rua tambore 1

</Text>
<Text style={styles.txt}>
Bairro:  tambore 1
</Text>
<Text style={styles.txt}>
Cep: 06704315 

</Text>
<Text style={styles.txt}>
Cidade: Barueri 

</Text>

</Card>

<Text style={styles.txt2}>
  

  Endereços 3:

</Text>
    <Card>
<Text style={styles.txt}>
Rua: Rua tambore 1

</Text>
<Text style={styles.txt}>
Bairro:  tambore 1
</Text>
<Text style={styles.txt}>
Cep: 06704315 

</Text>
<Text style={styles.txt}>
Cidade: Barueri 

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

export default Endereco