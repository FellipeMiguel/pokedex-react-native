import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Logo from "../components/Logo.js";
import Texts from "../components/Texts.js";
import Form from "../components/Form.js";
import Footer from "../components/Footer.js";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#56B4FF", "#FFF"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Logo />
        <Texts />
        <Form navigation={navigation} />
        <Footer />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
