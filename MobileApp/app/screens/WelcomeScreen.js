import React from "react";
import { Image, ImageBackground, StyleSheet, View ,Text} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/OIP.jpg")}
    >
        <View style={styles.logoContainer}>

        <Image style={styles.logo} source={require("../assets/images.jpg")}/>
        <Text>Loop in to music!!</Text>
        </View>
      <View style={styles.login}></View>
      <View style={styles.register}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    
  background: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  login: {
      backgroundColor:"grey",
    width: "100%",
    height: 70,

  },
  register: {
      backgroundColor:"lightgrey",
    width: "100%",
    height: 70,

  },
  logo:{
      width:150,
      height:150,
    },
    logoContainer:{
      position:"absolute",
      top:70,
      alignItems:"center"

  }
});

export default WelcomeScreen;
