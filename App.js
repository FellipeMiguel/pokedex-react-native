import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#56B4FF", "#FFF"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.telaInicial}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImagem}
              source="./assets/images/Pokémon-Logo.png"
            />
          </View>
          <View style={styles.texos}>
            <Text style={styles.h1}>Hello There!</Text>
            <Text style={styles.h2}>Welcome to the world of POKEMON!</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
