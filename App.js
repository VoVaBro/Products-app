import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import FavouriteProducts from "./screens/FavouriteProducts";
import UnlovedProducts from "./screens/UnlovedProducts";
import ScanQR from "./screens/ScanQR";

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Выберите любимые продукты" }}
        name="FavouriteProducts"
        component={FavouriteProducts}
      />
      <Stack.Screen
        options={{
          headerLeft: "",
          title: "Выберите не любимые продукты",
        }}
        name="UnlovedProducts"
        component={UnlovedProducts}
      />
      <Stack.Screen
        options={{ headerLeft: "", title: "Сканируйте QR код" }}
        name="ScanQR"
        component={ScanQR}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ProductStack />
    </NavigationContainer>
  );
}
