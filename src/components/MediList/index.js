import React from "react";
import {View} from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";

import styles from "./styles";

export const ItemMed = ({NomeMed,Venc}) => {
  return (
    <Layout style={styles.container} level="2">
      <View style={styles.Divtitle}>
        <Text category="h6">{NomeMed}</Text>
      </View>

      <View style={styles.DivInfo}>
        <Text style={styles.TextInfo}>{Venc}</Text>
      </View>
    </Layout>
  );
};
export default ItemMed;
