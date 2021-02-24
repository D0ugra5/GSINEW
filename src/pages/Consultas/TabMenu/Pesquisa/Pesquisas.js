import React, { useState, useEffect } from 'react';
import { IndexPath, Layout, Text, Select, SelectItem, View } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import axios from 'axios';
import styles from './styles'

import CardCon from './components/ItemConsulta'

const data = [
    'Clinico Geral',
    'Pedriata',
    'Dentista',
    'Cirurgia Toracica'
];



export const Pesquisa = () => {

    const [consultas, setConsultas] = useState([]);


    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const displayValue = data[selectedIndex.row]



    useEffect(() => {
        getConsultas()
    }, [displayValue])

    async function getConsultas() {

        if (displayValue) {
            try {
                const response = await axios.get(`http://192.168.0.162:3333/consulta/${displayValue}`)
                setConsultas(response.data);
                //console.log(response.data)


            } catch (error) {
                console.log('deu erro')
                console.log(error)
            }
        } else {
            console.log('nao tem med')
        }
    }


    return (

        <Layout style={styles.containerMain} level='1'>
            <Layout style={styles.Header}>
                <Text style={styles.txt}>Especialidades Médicas</Text>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>



                    {data.map((item, index) => (
                        <SelectItem title={item} key={index} />
                    ))}
                </Select>

            </Layout>



            <Layout style={styles.containerCard} level="2">
                <ScrollView>
                    {consultas.map((item, index) => (
                        <CardCon titulo={'Hospital OBS'} Data={item.Data} Doutor={item.Doutor} Exame={item.Exame} Horario={item.Horario} key={index} />
                    ))}
                </ScrollView>



            </Layout>
        </Layout>

    );
}



export default Pesquisa