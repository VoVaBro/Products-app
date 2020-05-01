import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
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

  const goToQR = () => {
    navigation.navigate("ScanQR");
  };

  const produstsItem = [
    { title: "Burger", icon: <Burger />, opacity: 1 },
    { title: "Drinks", icon: <Drinks />, opacity: 1 },
    { title: "Sushi", icon: <Sushi /> },
  ];
  const produstsItem2 = [
    { title: "Fish", icon: <Fish />, opacity: 1 },
    { title: "Pizza", icon: <Pizza />, opacity: 1 },
    { title: "Pasta", icon: <Pasta /> },
  ];
  const produstsItem3 = [
    { title: "Dessert", icon: <Dessert />, opacity: 1 },
    { title: "ChinaFood", icon: <ChinaFood />, opacity: 1 },
    { title: "Frizz", icon: <Frizz /> },
  ];

  const pressHandler = (title) => {
    if (favouriteGroup.includes(title)) {
      setFavouriteGroup((prev) => prev.filter((t) => t !== title));
    } else {
      setFavouriteGroup((prev) => [...prev, title]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.products}>
          <View style={{ flexDirection: "column" }}>
            {produstsItem.map((i) => (
              <TouchableOpacity
                key={i.title}
                onPress={() => pressHandler(i.title)}
                style={styles.icon_btn}
              >
                {i.icon}
                {favouriteGroup.includes(i.title) ? (
                  <View style={styles.checked}>
                    <Checked />
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{ flexDirection: "column", marginLeft: 13, marginRight: 13 }}
          >
            {produstsItem2.map((i) => (
              <TouchableOpacity
                key={i.title}
                onPress={() => pressHandler(i.title)}
                style={styles.icon_btn}
              >
                {i.icon}
                {favouriteGroup.includes(i.title) ? (
                  <View style={styles.checked}>
                    <Checked />
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flexDirection: "column" }}>
            {produstsItem3.map((i) => (
              <TouchableOpacity
                key={i.title}
                onPress={() => pressHandler(i.title)}
                style={styles.icon_btn}
              >
                {i.icon}
                {favouriteGroup.includes(i.title) ? (
                  <View style={styles.checked}>
                    <Checked />
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ zIndex: 0 }}>
          <View style={[styles.products_tab, { marginTop: 8 }]}>
            <View style={{ flexDirection: "column" }}>
              {produstsItem.map((i) => (
                <TouchableOpacity
                  key={i.title}
                  onPress={() => pressHandler(i.title)}
                  style={styles.icon_btn}
                >
                  {i.icon}
                  {favouriteGroup.includes(i.title) ? (
                    <View style={styles.checked}>
                      <Checked />
                    </View>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>

            <View
              style={{
                flexDirection: "column",
                marginLeft: 13,
                marginRight: 13,
              }}
            >
              {produstsItem2.map((i) => (
                <TouchableOpacity
                  key={i.title}
                  onPress={() => pressHandler(i.title)}
                  style={styles.icon_btn}
                >
                  {i.icon}
                  {favouriteGroup.includes(i.title) ? (
                    <View style={styles.checked}>
                      <Checked />
                    </View>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: "column" }}>
              {produstsItem3.map((i) => (
                <TouchableOpacity
                  key={i.title}
                  onPress={() => pressHandler(i.title)}
                  style={styles.icon_btn}
                >
                  {i.icon}
                  {favouriteGroup.includes(i.title) ? (
                    <View style={styles.checked}>
                      <Checked />
                    </View>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          width: 357,
          height: 0,
          position: "absolute",
        }}
      >
        <Image
          source={require("../assets/Gradient.png")}
          style={{
            position: "absolute",
            width: 385,
            marginLeft: -20,
            height: 246,
            marginTop: height >= 812 ? 470 : 370,
          }}
        />
      </View>

      <View style={styles.btn_view}>
        <TouchableOpacity onPress={goToQR} style={[styles.next_btn]}>
          <Text style={[styles.btn_text, { opacity: 1 }]}>Далее</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 114,
            marginTop: 90,
          }}
        >
          <Oval />
          <Oval />
          <Oval_a />
        </View>
      </View>
    </View>
  );
};

export default UnlovedProducts;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    position: "absolute",
    alignItems: "center",
    zIndex: 0,
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
    zIndex: 1,
  },
  products_tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
  icon_btn: {
    marginTop: 8,
    position: "relative",
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
  },
  btn_text: {
    fontWeight: "600",
    fontSize: 17,
    color: "#272727",
    opacity: 0.5,
  },
  btn_view: {
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: height >= 812 ? height / 1.4 : height / 1.5,
    zIndex: 2,
  },
  LinearGradientStyle: {
    marginTop: 5,
    width: 375,
    justifyContent: "center",
    alignItems: "center",
  },
});
