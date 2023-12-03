import { StyleSheet, View, Text, Button, Image } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  function getStarted() {
    // navigation.navigate("Categories");
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.logo}>DogWalks</Text>
      {/* <Text>The BEST place to track your dog walks between house members.</Text> */}
      <Image source={require("../assets/HomeImg.png")} style={styles.image} />
      <Button
        title="Get started by adding your dog!"
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
