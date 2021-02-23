
import React from 'react';
import { Layout, Card, Text, } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import styles from './styles'

const Header = (props) => {

  return (
    <Layout style={styles.container2} level='3'>
      <View {...props}>
        <Text category='h6'>Familiares </Text>

      </View>
    </Layout>
  );

}

export const Carteira = () => (


  <ScrollView>
    <Layout style={styles.container2} level='3'>
      <Card style={styles.card} status='primary' header={Header}>

        <Text style={styles.txt2}>Pai:</Text>
        <Card>
          <Text style={styles.txt}>Nome: Jose Teste
          </Text>
          <Text style={styles.txt}>Idade: 58</Text>
          <Text style={styles.txt}>Telefone: (58) 9999999999999</Text>
          <Text style={styles.txt}>Endereço: Rua Leon Bairro: Tambore    Complemento: perto do Shopping Tambore</Text>
        </Card>


        <Text style={styles.txt2}>Mãe:</Text>
        <Card>
          <Text style={styles.txt}>
            Nome: Maria Teste
            </Text>
          <Text style={styles.txt}>Idade: 58</Text>

          <Text style={styles.txt}>Telefone: (58) 9999999999999 </Text>
          <Text style={styles.txt}>Endereço: Rua Leon Bairro: Tambore    Complemento: perto do Shopping Tambore</Text>

        </Card>
        <Text style={styles.txt2}>Irmão:</Text>
        <Card>
          <Text style={styles.txt}>
            Nome: Jose Teste
          </Text>
          <Text style={styles.txt}>
            dade: 58
              </Text>
          <Text style={styles.txt}>Telefone: (58) 9999999999999</Text>
          <Text style={styles.txt}>Endereço: Rua Leon Bairro: Tambore  Complemento: perto do Shopping Tambore</Text>
        </Card>
        <Text style={styles.txt2}>Filho:</Text>
        <Card>
          <Text style={styles.txt}>
            Nome: Jose Teste
      </Text>
          <Text style={styles.txt}>Idade: 58</Text>
          <Text style={styles.txt}>Telefone: (58) 9999999999999</Text>
          <Text style={styles.txt}>Endereço: Rua Leon Bairro: Tambore    Complemento: perto do Shopping Tambore</Text>
        </Card>

      </Card>
    </Layout>
  </ScrollView>


);



export default Carteira