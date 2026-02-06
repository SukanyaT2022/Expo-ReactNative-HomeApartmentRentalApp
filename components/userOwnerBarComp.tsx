import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode, use } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
interface UserOwnerBarCompProps {
  // imagePropOnly?: string;
  imageUrlProp?: string;
  titleProp?: string;
  subtitleProp?: string;
  iconProps?: ReactNode;
}
const UserOwnerBarComp = ({
  // imagePropOnly,
  imageUrlProp,
  titleProp,
  subtitleProp,
  iconProps,
}: UserOwnerBarCompProps) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.wrapImgtext}>
         {/* <Image
          source={
            imagePropOnly ? imagePropOnly :require("@/assets/images/dog.jpg")
          }
          style={styles.userImage}
        /> */}
        <Image
          source={
            imageUrlProp
              ? { uri: imageUrlProp }
              : require("@/assets/images/dog.jpg")
          }
          style={styles.userImage}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.title}>{titleProp}</Text>
          <Text style={styles.subtitle}>{subtitleProp}</Text>
        </View>
      </View>
   { iconProps}
    </View>
  );
};

export default UserOwnerBarComp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconcontainer: {
    width: 50,
    height: 50,
    backgroundColor: "#C0C0C0",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapImgtext: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    gap: 15,
    alignItems: "center",
  },
  textcontainer: {},
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  wrapIcon: {},
});
