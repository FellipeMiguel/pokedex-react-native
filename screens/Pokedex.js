import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import PokedexTexts from "../components/PokedexTexts.js";
import PokedexCase from "../components/PokedexCase.js";

export default function Pokedex({ navigation }) {
  let searchPokemon = 1;
  let pokemonName;
  let pokemonNumber;

  let fetchPokemon = async (pokemon) => {
    let APIresponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    if (APIresponse.status === 200) {
      let data = await APIresponse.json();
      return data;
    }

    let data = await APIresponse.json();

    return data;
  };

  let renderPokemon = async (pokemon) => {
    let data = await fetchPokemon(pokemon);
    if (data) {
      <Image
        source={uri(
          data["sprites"]["versions"]["generation-v"]["black-white"][
            "animated"
          ]["front_default"]
        )}
      />;
      pokemonName = data.name;
      pokemonNumber = data.id;
      searchPokemon = data.id;
    }
  };
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
