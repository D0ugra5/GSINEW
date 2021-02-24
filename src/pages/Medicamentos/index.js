import React, { useState, useEffect } from "react";


import axios from 'axios';


import {

  Layout,
  Text,

  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import styles from "./styles";
import ItemMed from "../../components/MediList/index.js";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  
} from "react-native";

export const Med = () => {
  function navigateBack() { }

  const data = [
    'dipirona',
    'paracetamol',
    'metafetamina',
    'doril',

  ];

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));


  const displayValue = data[selectedIndex.row]

  console.log(displayValue)

  const [meds, setMeds] = useState([]);


  useEffect(() => {
    getMed()
  }, [displayValue])


  async function getMed() {

    if (displayValue) {
      try {
        const response = await axios.get(`http://192.168.0.162:3333/teste/${displayValue}`)
        setMeds(response.data);

      } catch (error) {
        console.log('deu erro')
        console.log(error)
      }


      
    }else{
      console.log('nao tem med')
    }
  }

  return (

    <SafeAreaView style={styles.Main} level="1">
      <StatusBar barStyle="light-content" backgroundColor="#5d99c6" />

      <ScrollView>

        <View style={styles.Header}>
          <TouchableOpacity style={styles.Button}>
            <Feather name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.Title} category="h3">
          Medicamentos
        </Text>

        <Layout style={styles.MedContinue} level="3">
          <Layout level="3" style={{ alignItems: "center" }}>
            <Text
              category="h5"
              style={{ marginBottom: 10, fontWeight: "bold" }}
            >
              Uso Continuo
            </Text>


            <Text style={styles.txtSearch}>Procure Um Medicamento</Text>
            <Select
              style={styles.select}
              placeholder='Default'
              value={displayValue}
              selectedIndex={selectedIndex}
              size="large"
              onSelect={index => setSelectedIndex(index)}>

              {data.map((item, index) => (
                <SelectItem title={item} key={index} style={styles.SelectItem} />
              ))}
            </Select>



            <Layout level="3">
              {meds.map((item, index) => (
                <ItemMed NomeMed={item.Nome} Venc={item.Venc} key={index} />
              ))}


            </Layout>



            <Text
              category="h5"
              style={{ marginBottom: 10, fontWeight: "bold", marginTop: 10 }}
            >
              Solicitação de medicamentos
            </Text>

            <Layout level="3">
              <ItemMed NomeMed={'Nolvagina'} />
              <ItemMed NomeMed={'Cannabos Sativa'} />
            </Layout>

            <Text
              category="h5"
              style={{ marginBottom: 10, fontWeight: "bold", marginTop: 10 }}
            >
              Pesquisar Medicamento
            </Text>

            <Layout level="3" style={styles.searchDiv}>


              <Layout level="3">
                <ItemMed NomeMed={'Aspirina'} />
                <ItemMed NomeMed={'paracetamol'} />
              </Layout>

            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>


  );
};

export default Med;
