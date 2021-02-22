
import React from 'react';
import { Avatar, Layout, Input, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from "expo-constants";
const Header = (props) =>{

return(
  <Layout style={styles.container2} level='3'>
    <View {...props}>
      <Text category='h6'>Unidade: UBS ITAQUA </Text>

    </View>
   </Layout>
  );

} 

export const Carteira = () => (

    <>
     <ScrollView>
        <Layout style={styles.container2} level='3'>

         
               
                 <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
      </Text>
    </Card>

    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
      </Text>
    </Card>


    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Vacinado Em:
            
      </Text>
      <Text>

Data: 23/01/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Funcionario Aplicação: ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Vacina: CoronaVac
  
            
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

export default Carteira