import React from "react";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import styles from "./style";
import ItemMed from "../../components/MediList/index";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";

export const Schedule = () => {
  return (
    <Layout style={styles.Main} level="1">
      <Text style={styles.Title} category="h4">Agenda </Text>
      <Layout style={styles.MedContinue} level="3">
        <ScrollView>
          <ItemMed   NomeMed={'Consulta - Oncologista - UBS-Centro '}/>
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '}/>
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro'}/>
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '} />
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '} />
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '}/>
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '}/>
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro'} />
          <ItemMed  NomeMed={'Consulta - Oncologista - UBS-Centro '}/>
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default Schedule;
