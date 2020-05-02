import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import Burger from "../assets/Burger.svg";
import ChinaFood from "../assets/ChinaFood.svg";
import Dessert from "../assets/Dessert.svg";
import Drinks from "../assets/Drinks.svg";
import Frizz from "../assets/Frizz.svg";
import Pizza from "../assets/Pizza.svg";
import Sushi from "../assets/Sushi.svg";
import Pasta from "../assets/Pasta.svg";
import Fish from "../assets/Fish.svg";
import Oval from "../assets/Oval.svg";
import Oval_a from "../assets/Oval_des.svg";

import Checked from "../assets/Checked.svg";

const { width, height } = Dimensions.get("screen");

const UnlovedProducts = ({ navigation }) => {
  const [favouriteGroup, setFavouriteGroup] = useState([]);

  const [produstsItem, setprodustsItem] = useState([
    { title: "Burger", icon: <Burger /> },
    { title: "Drinks", icon: <Drinks /> },
    { title: "Sushi", icon: <Sushi /> },
    { title: "Fish", icon: <Fish /> },
    { title: "Pizza", icon: <Pizza /> },
    { title: "Pasta", icon: <Pasta /> },
    { title: "Dessert", icon: <Dessert /> },
    { title: "ChinaFood", icon: <ChinaFood /> },
    { title: "Frizz", icon: <Frizz /> },

    { title: "Burger1", icon: <Burger /> },
    { title: "Drinks1", icon: <Drinks /> },
    { title: "Sushi1", icon: <Sushi /> },
    { title: "Fish1", icon: <Fish /> },
    { title: "Pizza1", icon: <Pizza /> },
    { title: "Pasta1", icon: <Pasta /> },
    { title: "Dessert1", icon: <Dessert /> },
    { title: "ChinaFood1", icon: <ChinaFood /> },
    { title: "Frizz1", icon: <Frizz /> },
  ]);

  const pressHandler = (title) => {
    if (favouriteGroup.includes(title)) {
      setFavouriteGroup((prev) => prev.filter((t) => t !== title));
    } else {
      setFavouriteGroup((prev) => [...prev, title]);
    }
  };

  const goToUnlovedProd = () => {
    navigation.navigate("ScanQR");
  };

  const renderProductsList = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      onPress={() => pressHandler(item.title)}
      style={styles.icon_btn}
    >
      {item.icon}
      {favouriteGroup.includes(item.title) ? (
        <View style={styles.checked}>
          <Checked />
        </View>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produstsItem}
        renderItem={renderProductsList}
        keyExtractor={(item) => item.title}
        numColumns={3}
      />

      <TouchableOpacity onPress={goToUnlovedProd} style={[styles.next_btn]}>
        <Text style={[styles.btn_text, { opacity: 1 }]}>Далее</Text>
      </TouchableOpacity>

      <Image
        source={require("../assets/Gradient.png")}
        style={{
          position: "absolute",
          width: width,
          marginLeft: 0,
          height: 246,
          marginTop: 580,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 114,
          position: "absolute",
          marginTop: 710,
        }}
      ></View>

      <View
        style={{
          width: 100,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Oval />
        <Oval />
        <Oval_a />
      </View>
    </View>
  );
};

export default UnlovedProducts;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
  products_tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
  icon_btn: {
    marginTop: 8,
    position: "relative",
    padding: 5,
  },
  checked: {
    position: "absolute",
    marginTop: 6,
    marginLeft: 67,
  },
  tab_menu: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 375,
    height: 246,
    marginTop: 5,
  },
  next_btn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: 214,
    height: 63,
    backgroundColor: "#BBFF00",
    borderRadius: 40,
    marginTop: height / 1.7,
  },
  btn_text: {
    fontWeight: "600",
    fontSize: 17,
    color: "#272727",
    opacity: 0.5,
  },
  btn_view: {
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 0,
    zIndex: 0,
  },
});
