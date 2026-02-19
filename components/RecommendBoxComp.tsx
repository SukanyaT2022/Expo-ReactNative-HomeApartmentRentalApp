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
        <View style={styles.wrapTitleText}>
          <View style={styles.wrapTitlePrice}>
            <Text style={styles.titleStyle}>{titleProp}</Text>
            <Text style={[styles.textStyle, styles.priceStyle]}>
              ${priceProp}
            </Text>
          </View>

          <View style={styles.wrapTextIcon}>
            {iconProp}
            <Text style={styles.textStyle}>{textProp}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendBoxComp;

const styles = StyleSheet.create({
  container: {
    borderRadius: size.borderRadius,
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 300,
    borderRadius: size.borderRadius,
  },
  whiteBoxContainer: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    borderRadius: size.borderRadius,
    padding: 10,
    paddingHorizontal: 20,
    width: "96%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 500,
  },
  textStyle: {},
  wrapTextIcon: {
    flexDirection: "row",
    gap: 5,
  },
  wrapTitleText: {
    gap: 5,
  },
  priceStyle: {
    fontWeight: 500,
  },
  wrapTitlePrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%",
  },
});
