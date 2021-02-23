import React from 'react';
import { IndexPath, Layout, Text, Select, SelectItem,Card } from '@ui-kitten/components';
import { StyleSheet,ScrollView,View } from 'react-native';

const Header = ({props}) =>{

    return(
      <Layout style={styles.container3} level='2'>
        <View {...props}>
          <Text category='h6'>Unidade: UBS Itaqua </Text>
    
        </View>
       </Layout>
      );
    
    } 


const data = [
    'Clinico Geral',
    'Pedriata',
    'Dentista',
    'Urologista',
    'Cardiologia',
    'Cirurgia Cardiovascular',
    'Cirurgia da Mão',
    'Cirurgia Torácica'];



export const Pesquisa = () => {
  
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    
    const displayValue = data[selectedIndex.row]

    return (
        
            <Layout style={styles.container2} level='1'>
                <Text style={styles.txt}>Especialidades Médicas</Text>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>

                    {data.map((item, index)=>(
                      <SelectItem title={item} key={index}/> 
                      ))}
                </Select>

                <ScrollView>
                <Layout style={styles.container2} level='3'>
                <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Consulta Agendada
  
            
      </Text>
      <Text>

Data: 23/10/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Doutor(a): ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Exame: Dentista
  
            
      </Text>
    </Card>
    
    <Card style={styles.card}  status='primary'    header={Header}>
      <Text>
      Consulta Agendada
  
            
      </Text>
      <Text>

Data: 23/10/2021
      
</Text>
  
<Text>
       Horario: 14:50 
       
       
  </Text>
      
  

  <Text>
  Doutor(a): ClodoValdo Da Silva Crm: 21334
          
          </Text>
          <Text>
  Exame: Dentista
  
            
      </Text>
    </Card>
  
    </Layout>

                </ScrollView>

            </Layout>
            

        
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: "column",





    },
    container3:{
        flex: 1,
        flexDirection: "column",
        alignItems:'center',
        

    },
    select: {
        marginTop: 9,
        height: 50,
    },
    txt: {

        marginTop: 25,

    },
    card:{
        marginTop:20,
        width:"100%",
  

    }

});

export default Pesquisa