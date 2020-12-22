import React from "react";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/ui/Header";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import DefaultText from "../components/ui/DefaultText";

const NotificationScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 18,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/Logo_UAC.png")}
          style={{ width: 40, height: 42 }}
        />
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Divider style={{ borderTopWidth: 0.1999 }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <DefaultText>Aucune nouvelle notification</DefaultText>
      </View>
    </View>
  );
};
export default NotificationScreen;
