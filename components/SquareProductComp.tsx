import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { size } from "@/constants/size";
interface SquareProductCompProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  isFavorite: boolean;
}
const SquareProductComp = ({imageUrl, title, location, price, rating, isFavorite}: SquareProductCompProps)=> {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImageBox}>
        <View style={styles.wrapRateHeart}>
          <View style={styles.wrapRate}>
            <Ionicons name="star" size={12} color="yellow" />
            <Text style={{ fontSize: 10, fontWeight: "500" }}>{rating}</Text>
          </View>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color="red"
            style={styles.heartIcon}
          />
        </View>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.targetImg}
        />
      </View>
<View style={styles.wrapTextSliderIcon}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{location}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <FontAwesome6 name="circle-chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default SquareProductComp;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 300,
    backgroundColor: colors.mediumgray,
    borderRadius: size.borderRadius,
    padding: 10,

  },
  wrapImageBox: {
    height: 200,
  },
  wrapRateHeart: {},
  wrapRate: {
    backgroundColor: "white",
    width: 50,
    height: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  targetImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  containerText: {
gap: 2,
paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  wrapTextSliderIcon:{
flexDirection: "row",
alignItems: "center",
justifyContent: "space-between",


  },
});
