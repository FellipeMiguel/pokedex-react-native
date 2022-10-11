import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoImagem}
        source={require("../assets/images/Pokémon-Logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
  },
  logoImagem: {
    width: 450,
    height: 350,
    margin: 0,
  },
});
