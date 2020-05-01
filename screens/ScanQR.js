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
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={styles.container}>
        {height >= 812 ? <Scan /> : <Scan_small />}
      </View>

      <View style={styles.btn_view}>
        <TouchableOpacity style={[styles.next_btn]}>
          <Text style={[styles.btn_text, { opacity: 1 }]}>Далее</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 114,
            marginTop: 110,
          }}
        >
          <Oval />
          <Oval />
          <Oval />
        </View>
      </View>
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    marginLeft: 130,
    alignItems: "center",
    marginTop: height >= 812 ? height / 1.5 : height / 1.5,
  },
});
