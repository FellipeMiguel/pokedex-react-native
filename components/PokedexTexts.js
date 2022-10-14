import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PokedexTexts() {
  return (
    <View style={styles.pokedexTexts}>
      <Text style={styles.pokedexTextsH1}>
        This world is inhabited by creatures called POKEMON!{" "}
      </Text>
      <Text>See some of then on my pokédex!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokedexTexts: {
    alignItems: "center",
    marginTop: 80,
  },
  pokedexTextsH1: {
    paddingBottom: 20,
  },
});
