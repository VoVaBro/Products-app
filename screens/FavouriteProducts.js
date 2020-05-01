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

const FavouriteProducts = ({ navigation }) => {
  const [favouriteGroup, setFavouriteGroup] = useState([]);


  const [produstsItem, setprodustsItem] = useState( [
    { title: "Burger", icon: <Burger /> },
    { title: "Drinks", icon: <Drinks /> },
    { title: "Sushi", icon: <Sushi /> },
    { title: "Burger2", icon: <Burger /> },
    { title: "Drinks2", icon: <Drinks /> },
    { title: "Sushi2", icon: <Sushi /> },
  ]);

  const [produstsItem2, setprodustsItem2] = useState( [
    { title: "Fish", icon: <Fish /> },
    { title: "Pizza", icon: <Pizza /> },
    { title: "Pasta", icon: <Pasta /> },
    { title: "Fish2", icon: <Fish /> },
    { title: "Pizza2", icon: <Pizza /> },
    { title: "Pasta2", icon: <Pasta /> },
  ]);
  const [produstsItem3, setprodustsItem3] = useState( [
    { title: "Dessert", icon: <Dessert /> },
    { title: "ChinaFood", icon: <ChinaFood /> },
    { title: "Frizz", icon: <Frizz /> },
    { title: "Dessert2", icon: <Dessert /> },
    { title: "ChinaFood2", icon: <ChinaFood /> },
    { title: "Frizz2", icon: <Frizz /> },
  ]);

  const pressHandler = (title) => {
    if (favouriteGroup.includes(title)) {
      setTimeout(() => {
setFavouriteGroup((prev) => prev.filter((t) => t !== title));
      },0)
      
    } else {
      setTimeout(() => {
setFavouriteGroup((prev) => [...prev, title]);
      },0)
      
    }
  };
  
  const goToUnlovedProd =  () => {
    if (favouriteGroup.length >= 1) {
      setTimeout(() => {
navigation.navigate("UnlovedProducts");
      },0)
       
    }
  }

  return (
    
      <View style={styles.container}>
        
      <ScrollView showsVerticalScrollIndicator={false} style={{height: height}}>

        <View style={styles.products}>
          <View style={{ flexDirection: "column", }}>
            {produstsItem.map((i) => (
              <TouchableOpacity
                key={i.title}
                onPress={() => pressHandler(i.title)}
                style={styles.icon_btn}
              >
                {i.icon}
                {favouriteGroup.includes(i.title) ? (
                  <View key={i.title} style={styles.checked}>
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
                  <View key={i.title} style={styles.checked}>
                    <Checked />
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flexDirection: "column",  }}>
            {produstsItem3.map((i) => (
              <TouchableOpacity
                key={i.title}
                onPress={() => pressHandler(i.title)}
                style={styles.icon_btn}
              >
                {i.icon}
                {favouriteGroup.includes(i.title) ? (
                  <View key={i.title} style={styles.checked}>
                    <Checked />
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* <View style={styles.btn_view}> */}
        
        {favouriteGroup.length >= 1 ? (
          <TouchableOpacity onPress={goToUnlovedProd} style={[styles.next_btn]}>
            <Text style={[styles.btn_text, { opacity: 1 }]}>Далее</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.next_btn}>
            <Text style={styles.btn_text}>Далее</Text>
          </View>
        )}
        
      {/* </View> */}

      {/* <View
        style={{
          width: 357,
          height: 0,
        position: 'absolute',
          alignItems: 'center'
        }}
      > */}
        <Image
          source={require("../assets/Gradient.png")}
          style={{
            position: 'absolute',
            width: width,
            marginLeft:0,
            height:  246,
            marginTop: 580
          }}
        />

          <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 114,
            position: 'absolute',
            marginTop: 710
          }}
        >
          <Oval />
          <Oval_a />
          <Oval_a />
        </View>

      </View>
    // </View>
    
    
    
  );
};

export default FavouriteProducts;

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
    marginTop: height / 1.7
  },
  btn_text: {
    fontWeight: "600",
    fontSize: 17,
    color: "#272727",
    opacity: 0.5,
  },
  btn_view: {
    position: 'relative',
    alignItems: "center",
    flexDirection: "column",
    justifyContent: 'center',
    marginTop: 0,
    zIndex: 0,
  }
});
