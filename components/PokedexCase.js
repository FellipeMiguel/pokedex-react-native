import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function Forms({ navigation }) {
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
    <View style={styles.pokedexCase}>
      <Image
        style={styles.pokedexImg}
        source={require("../assets/images/pokedex.png")}
      />
      <Image
        style={styles.pokemonImg}
        source={require("../assets/images/bulbasaur.png")}
      />
      <View style={styles.pokemonData}>
        <Text style={styles.pokemonNumber}>1</Text>
        <Text>-</Text>
        <Text style={styles.pokemonName}>Bulbasaur</Text>
      </View>
      <TextInput
        style={[styles.input, styles.shadow]}
        value={Text}
        placeholder={"Name or Number"}
      />
      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (searchPokemon > 1) {
              searchPokemon -= 1;
              renderPokemon(searchPokemon);
            }
          }}
        >
          <Text style={styles.textButton}>Prev &lt;</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            searchPokemon += 1;
            renderPokemon(searchPokemon);
          }}
        >
          <Text style={styles.textButton}>Next &gt;</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokedexCase: {
    alignItems: "center",
  },
  pokedexImg: {
    position: "relative",
  },
  pokemonImg: {
    position: "absolute",
    bottom: "-10%",
    resizeMode: "contain",
    width: 180,
  },
  formText: {
    position: "absolute",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    outline: "none",
    marginBottom: 30,
    position: "absolute",
    top: "65%",
  },
  pokemonData: {
    flexDirection: "row",
    position: "absolute",
    top: "54.5%",
  },
  buttons: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: "#AD1941",
    width: 120,
    marginLeft: 10,
    bottom: "-190%",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
