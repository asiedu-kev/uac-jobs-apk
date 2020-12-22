import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "./SplashScreen";
import * as Font from "expo-font";
import Login from "./src/screens/Login";
import { Activity } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

const fetchFonts = () => {
  return Font.loadAsync({
    "openSans-regular": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
    "openSans-Bold": require("./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf"),
    "passionOne-regular": require("./assets/fonts/Passion_One/PassionOne-Regular.ttf"),
    "passionOne-bold": require("./assets/fonts/Passion_One/PassionOne-Bold.ttf"),
  });
};

export default function App() {
  const [assestsLoaded, setAssestsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadAssets = async () => {
    try {
      await Promise.all([fetchFonts()]);
    } catch (error) {
      console.error(error);
    } finally {
      // await SplashScreen.hideAsync();
      setAssestsLoaded(true);
    }
  };

  useEffect(() => {
    loadAssets();
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);

  if (isLoading || !assestsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Activity />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "openSans-regular",
  },
});
