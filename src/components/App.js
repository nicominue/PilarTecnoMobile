import React, { Component, useCallback } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import AppStack from "../routes/app";
import { NavigationContainer } from "@react-navigation/native";

export default App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
