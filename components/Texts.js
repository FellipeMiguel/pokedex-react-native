import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Texts() {
  return (
    <View style={styles.texos}>
      <Text style={styles.h1}>Hello There!</Text>
      <Text style={styles.h2}>Welcome to the world of POKEMON!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texos: {
    alignItems: "center",
  },
  h1: {
    fontFamily: "Oxanium-Bold",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -50,
  },
  h2: {
    fontFamily: "Oxanium-Bold",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
