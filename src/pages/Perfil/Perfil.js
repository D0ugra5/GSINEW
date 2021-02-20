import React from "react";
import { Avatar, Layout, Text } from "@ui-kitten/components";

import styles from "./PerfilStyles";
import ItemList from "../../components/ItemList";

export const Perfil = () => (
  <Layout style={styles.containerMain} level="1">
    <Layout style={styles.containerBody} level="1">
      <Layout style={styles.containerProfile}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require("../../../assets/jonny.jpg")}
        />
        <Text category="h4" style={styles.Text}>
          Mohamed Salid
        </Text>
        <Text style={styles.Text3}>RG:12.223.444-8 | CPF:45.667.778-4</Text>
      </Layout>

      <Layout style={styles.containerInfo} level="1">
        <ItemList />
        <ItemList />
        <ItemList />
      </Layout>
    </Layout>
  </Layout>
);

export default Perfil;
