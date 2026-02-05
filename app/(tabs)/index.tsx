
import UserOwnerBarComp from "@/components/UserOwnerBarComp";
import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <UserOwnerBarComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
