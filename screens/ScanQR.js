import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

import Oval from "../assets/Oval.svg";
import Scan from "../assets/ScanQR.svg";
import Scan_small from "../assets/ScanQR_small.svg";

const { width, height } = Dimensions.get("screen");

const ScanQR = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.btn_view}> */}

      <View style={{ flex: 1, position: "absolute" }}>
        <Scan />
      </View>

      <TouchableOpacity style={[styles.next_btn]}>
        <Text style={[styles.btn_text, { opacity: 1 }]}>Далее</Text>
      </TouchableOpacity>

      {/* </View> */}

      {/* <View
        style={{
          width: 357,
          height: 0,
        position: 'absolute',
          alignItems: 'center'
        }}
      > */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 114,
          position: "absolute",
          marginTop: 710,
        }}
      >
        <Oval />
        <Oval />
        <Oval />
      </View>
    </View>
    // </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    marginTop: height / 1.5,
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
