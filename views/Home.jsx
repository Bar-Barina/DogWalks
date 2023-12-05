import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";


export default function Home({navigation}) {

 
  function getStarted() {
    navigation.navigate("DogEdit");
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.logo}>DogWalks</Text>
      <Image source={require("../assets/HomeImg.png")} style={styles.image} />
      <Button
        title="Get started!"
        onPress={getStarted}
        android_ripple={{ color: "#CCC7" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f95154",
  },
  image: {
    margin: 30,
    width: 250,
    height: 220,
  },
});
