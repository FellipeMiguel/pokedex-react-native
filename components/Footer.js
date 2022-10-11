import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Texts() {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.pokebola}
        source={require("../assets/images/pokebola.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pokebola: {
    width: 58,
    height: 58,
  },
});
