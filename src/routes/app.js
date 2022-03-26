import React, { Component, useCallback } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Mapa from '../screens/Map';
import Perfil from '../screens/Profile';

const Stack = createStackNavigator();

export default AppStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Profile" component={Perfil} />
        <Stack.Screen name="Map" component={Mapa} />
      </Stack.Navigator>
    );
  }