import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const SquareProductComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImageBox}>
        <View style={styles.wrapRateHeart}>
          <View style={styles.wrapRate}>
            <Ionicons name="star" size={12} color="yellow" />
            <Text style={{ fontSize: 10, fontWeight: "500" }}>4.5</Text>
          </View>
          <Ionicons
            name="heart"
            size={20}
            color="red"
            style={styles.heartIcon}
          />
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.targetImg}
        />
      </View>
<View style={styles.wrapTextSliderIcon}>
      <View style={styles.containerText}>
        <Text style={styles.title}>smallHome</Text>
        <Text style={styles.text}>NYC</Text>
        <Text style={styles.price}>$2500</Text>
      </View>
      <FontAwesome6 name="circle-chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default SquareProductComp;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 250,
    backgroundColor: colors.mediumgray,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  wrapImageBox: {
    height: "70%",
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
