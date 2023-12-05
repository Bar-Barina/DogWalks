import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Platform,
  } from "react-native";
  import React from "react";
  
  export default function DogPreview({ payload, onPress }) {
    // const { title, imageUrl, complexity, affordability, duration } = payload;
    return (
      <View style={styles.previewContainer}>
        <Pressable
         
          android_ripple={{ color: "#CCC7" }}
          onPress={onPress}
        >
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

  });
  