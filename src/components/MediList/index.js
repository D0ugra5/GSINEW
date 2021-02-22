import React from "react";
import {View} from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";

import styles from "./styles";

export const ItemMed = ({NomeMed}) => {
  return (
    <Layout style={styles.container} level="2">
      <View style={styles.Divtitle}>
        <Text category="h6">{NomeMed}</Text>
      </View>

      <View style={styles.DivInfo}>
        <Text style={styles.TextInfo}>15/01/2021</Text>
      </View>
    </Layout>
  );
};
export default ItemMed;
