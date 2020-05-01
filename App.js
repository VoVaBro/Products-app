import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {  Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import FavouriteProducts from './screens/FavouriteProducts'
import UnlovedProducts from './screens/UnlovedProducts'
import ScanQR from './screens/ScanQR'


const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavouriteProducts" component={FavouriteProducts} />
      <Stack.Screen name="UnlovedProducts" component={UnlovedProducts} />
      <Stack.Screen name="ScanQR" component={ScanQR} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ProductStack/>
    </NavigationContainer>
  );
}

