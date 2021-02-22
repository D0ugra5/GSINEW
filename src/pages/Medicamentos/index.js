import React from "react";
import {
  Avatar,
  Layout,
  Text,
  Button,
  Icon,
  Input,
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
  TextInput,
} from "react-native";

export const Med = () => {
  function navigateBack() {}

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

            <Layout level="3">
              <ItemMed   NomeMed={'Dipirona '}/>
              <ItemMed   NomeMed={'Bezetazil '} />
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
              <View style={styles.SearchContainer}>

                <Feather name="search" color="#5d99c6" size={14} />
                <TextInput style={styles.inputStyle} placeholder="Digite um medicamento" />
              </View>

              <Layout level="3">
              <ItemMed NomeMed={'Aspirina'} />
              <ItemMed  NomeMed={'paracetamol'} />
            </Layout>

            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Med;
