import { Image, StyleSheet, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close} />
      <View style={styles.delete} />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/music.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  close: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default HomeScreen;
