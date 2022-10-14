import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  Pressable,
} from "react-native";

export default function Forms({ navigation }) {
  return (
    <View style={styles.form}>
      <SafeAreaView style={styles.formConteudo}>
        <Text style={styles.formText}>First, what is your name?</Text>
        <TextInput
          style={[styles.input, styles.shadow]}
          value={Text}
          placeholder={"your name"}
        />
      </SafeAreaView>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Pokedex")}
      >
        <Text style={styles.textButton}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  form: {
    alignItems: "center",
  },
  formConteudo: {
    alignItems: "center",
  },
  formText: {
    fontFamily: "Oxanium-Light",
    fontSize: 16,
    marginBottom: 20,
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
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: "#AD1941",
    width: 120,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
