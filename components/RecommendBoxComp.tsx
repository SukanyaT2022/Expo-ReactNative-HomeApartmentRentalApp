import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { size } from "@/constants/size";
interface RecommendBoxCompProps {
  imageUrl: string;
  titleProp: string;
  textProp: string;
  priceProp: number;
  iconProp: ReactNode;
}
const RecommendBoxComp = ({
  imageUrl,
  titleProp,
  textProp,
  priceProp,
  iconProp,
}: RecommendBoxCompProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      <View style={styles.whiteBoxContainer}>
        <View>
          <Text style={styles.titleStyle}>{titleProp}</Text>
          <Text style={styles.textStyle}>{textProp}</Text>
        {iconProp}
        </View>
        <View>
          <Text style={styles.textStyle}>${priceProp}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecommendBoxComp;

const styles = StyleSheet.create({
  container: {
    borderRadius: size.borderRadius,
  },
  imageStyle: {
    width: "100%",
    height: 300,
    borderRadius: size.borderRadius,
  },
  whiteBoxContainer: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    flexDirection: "row",
    borderRadius: size.borderRadius,
    padding: 10,
  },
  titleStyle: {},
  textStyle: {},
});
