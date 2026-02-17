import CatergoryBoxMap from "@/components/CatergoryBoxMap";
import FilterComp from "@/components/FilterComp";
import InputComp from "@/components/InputComp";
import SquareProductComp from "@/components/SquareProductComp";
import UserOwnerBarComp from "@/components/UserOwnerBarComp";
import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { rentalProperties } from "../../constants/propertyList";
import { globalStyle } from "@/constants/globalStyle";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text> */}
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
      {/* end use component */}

      {/* start search box */}
      <View style={styles.searchBoxFilterWrap}>
        <View style={styles.searchBox}>
          <InputComp
            iconprops={<EvilIcons name="search" size={30} color="black" />}
            textprops="Search"
          />
        </View>
        <View style={styles.filterButton}>
          <FilterComp
            style={styles.filterButton}
            iconprops={
              <Ionicons name="filter-circle-outline" size={40} color="black" />
            }
          />
        </View>
        {/* below close main view */}
      </View>
      {/* end search box */}

      {/* start home  or aprtment small box */}
      <View style={styles.catergoryBoxWrap}>
        <CatergoryBoxMap
          title="Home"
          icon={<Ionicons name="home" size={24} color="black" />}
        />
        <CatergoryBoxMap
          title="Apartment"
          icon={<MaterialIcons name="apartment" size={24} color="black" />}
        />
        <CatergoryBoxMap
          title="Cottage"
          icon={<MaterialIcons name="cottage" size={24} color="black" />}
        />
      </View>
      {/* end home  or aprtment small box */}



      {/* section1/ start map sqauare Box component */}

      <View style={styles.wrapMapSquareBox}>
        <Text style={[globalStyle.titleText, styles.titleTextStyle]}>
          Nearby Places
        </Text>
        <FlatList
       horizontal={true}
          data={rentalProperties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SquareProductComp
              imageUrl={item.images[0]}
              title={item.type}
              price={item.price}
              rating={item.rateStar}
              isFavorite={item.isFavorite}
              location={item.province}
            />
          )}
        />
      </View>
      {/* end map sqauare Box component */}

{/* section2/ start recommend for you  */}
      <View style={styles.mainBoxRecommend}>
          <Text style={[globalStyle.titleText, styles.titleTextStyle]}>
         Recommend for you
        </Text>
         <FlatList
      //  horizontal={true}
          data={rentalProperties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SquareProductComp
              imageUrl={item.images[0]}
              title={item.type}
              price={item.price}
              rating={item.rateStar}
              isFavorite={item.isFavorite}
              location={item.province}
            />
          )}
        />
      </View>
{/* end recommend for you  */}

    </View>
  );
}

const styles = StyleSheet.create({
titleTextStyle:{
paddingVertical:5,
paddingLeft:10,
},
  container: {
    padding: 10,
    gap: 20,
    //on android margin top 25 and on ios margin top 20
    marginTop: Platform.OS === "android" ? 25 : 40,
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
  iconParentWrap: {
    flexDirection: "row",
    alignContent: "center",
    gap: 8,
  },
  searchBoxFilterWrap: {
    flexDirection: "row",
    gap: 10,
  },
  searchBox: {
    flex: 8, // 80%
  },
  filterButton: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  catergoryBoxWrap: {
    flexDirection: "row",
    gap: 10,
  },
  wrapMapSquareBox: {
    
  },
  mainBoxRecommend: { 

  },
});
