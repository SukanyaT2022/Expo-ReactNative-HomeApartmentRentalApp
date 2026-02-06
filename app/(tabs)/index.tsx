
import UserOwnerBarComp from "@/components/UserOwnerBarComp";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <UserOwnerBarComp 
      // imagePropOnly={require("@/assets/images/dog.jpg")}
        imageUrlProp="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        titleProp="John Doe"
        subtitleProp="Premium Member"
        // iconProps={ <AntDesign name="bell" size={24} color="black" />}
        iconProps={
<View style={styles.iconParentWrap}>
<View style={styles.iconcontainer}>

  <View style={styles.wrapIcon}></View>
  <AntDesign name="bell" size={24} color="black" />
</View>

{/* <View style={styles.iconcontainer}>
  <View style={styles.wrapIcon}></View>
  <AntDesign name="bell" size={24} color="black" />
</View> */}

</View>
        }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
   iconcontainer: {
    width: 40,
    height: 40,
    backgroundColor: "#C0C0C0",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapIcon: {},
  iconParentWrap:{
    flexDirection: "row",
    alignContent: "center",
    gap:8,
  }
});
