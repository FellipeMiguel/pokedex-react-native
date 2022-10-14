import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import PokedexTexts from "../components/PokedexTexts.js";
import PokedexCase from "../components/PokedexCase.js";

export default function Pokedex({ navigation }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#56B4FF", "#FFF"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PokedexTexts />
        <PokedexCase />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
