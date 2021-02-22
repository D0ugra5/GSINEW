
import React from 'react';
import { Avatar, Layout, Input, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from "expo-constants";
const Header = (props) =>{

return(
  <Layout style={styles.container2} level='3'>
    <View {...props}>
      <Text category='h6'>Unidade: Ubs Itaquacetuba </Text>

    </View>
   </Layout>
  );

} 

export const UBS = () => (

    <>
     <ScrollView>
        <Layout style={styles.container2} level='3'>

         
               
                 <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>

    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>
    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>

    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>

    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
    </Card>

    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Bairro: teste
  
            
      </Text>
      <Text>

Rua: teste do teste n:144
      
</Text>

  
          <Text>
  Distancia:0,6 km
  
            
      </Text>
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

        marginBottom:10,
    }

});

export default UBS