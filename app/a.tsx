import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Splash = () => {
  return (
    <View>
      <Text>LiveWell.com</Text>
      <Ionicons name="heart-circle-outline" size={24} color="black" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
