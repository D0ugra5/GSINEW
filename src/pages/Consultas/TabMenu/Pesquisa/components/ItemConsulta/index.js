import React from 'react'
import { Layout, Text, Card } from '@ui-kitten/components';
import { View } from 'react-native'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons'; 

var Header

export default function CardCon({ nomeConsulta, titulo, Data, Horario, Doutor, Exame }) {
  Header = ({ props }) => {

    return (
      <Layout style={styles.Header} level='2'>
        <View {...props}>
          <Text category='h6'>{titulo}</Text>

        </View>
      </Layout>
    );

  }
  return (

    <Card style={styles.card} header={Header}>

      <View style={styles.info}>

        <Text style={styles.textDoctor}>{Doutor}</Text>
        <Text style={styles.textExame}>{Exame}</Text>
        <View style={styles.DataTime}>
        <FontAwesome5 name="calendar-alt" size={16} color="#3548bd" />
          <Text style={styles.Data}>{Data}</Text>
          <Text>{Horario}</Text>
        </View>



      </View>


    </Card>
  )
}
