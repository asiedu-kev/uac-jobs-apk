import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import DefaultText from "../components/ui/DefaultText";
import { useNavigation } from "@react-navigation/native";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Divider } from "react-native-paper";
import SearchBar from "../components/ui/SearchBar";
import Header from "../components/ui/Header";
import Card from "../components/ui/Card";
import ActionButton from "../components/ui/ActionButton";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { getArtticles, getOpportunities } from "../helpers/ApiCall.js";
import Share from "react-native-share";

const Home = () => {
  const [text, setText] = useState(null);

  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: "Welcome",
    tabBarIcon: () => (
      <Ionicons
        name="newspaper"
        size={25}
        color={navigation.isFocused() ? Colors.green : Colors.dark}
        style={styles.icon}
      />
    ),
  });
  const shareOptions = {
    title: "Share via",
    message: "some message",
    url: "some share url",
    social: Share.Social.WHATSAPP,
    whatsAppNumber: "9199999999", // country code + phone number
    filename: "test", // only for base64 file in Android
  };
  const getData = () => {
    getArtticles().then((data) => console.log(data));
  };

  const fun = async () => {
    const shareResponse = await Share.open(shareOptions);
  };

  const mytextvar =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
    " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
    " exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
    "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
    "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header />
        <Divider style={{ borderTopWidth: 0.1999 }} />
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <SearchBar
            value={text}
            onChange={setText}
            onSubmit={() => null}
            onClear={() => setText(null)}
            placeholder={"Rechercher un article"}
          />
          <Divider style={{ borderTopWidth: 0.1999 }} />
          {/*<DefaultTextBold style={{marginVertical: '50%'}}>Aucune actualité disponible</DefaultTextBold> */}
          {[1, 2, 3, 5, 8, 8, 5, 5, 5, 8, 9, 9, 10, 15, 28, 18].map((item) => (
            <Card style={{ padding: 15, marginVertical: 12 }}>
              <DefaultTextBold style={{ fontSize: 18 }}>
                Rentrée à l'UAC !
              </DefaultTextBold>
              <Divider style={{ borderWidth: 0.1999 }} />
              <DefaultText>
                {mytextvar.length > 100
                  ? mytextvar.substring(0, 100 - 3) + "..."
                  : mytextvar}
              </DefaultText>
              {/*<Image source={require('../../assets/actuality.png')} style={{ width: 300}}
                                    resizeMode={"stretch"}/> */}
              <View style={{ flex: 1, flexDirection: "row" }}>
                <ActionButton
                  label={"LIRE PLUS"}
                  onPress={() => navigation.navigate("ActualityDetail")}
                  color={Colors.dark}
                  style={{ marginTop: 14, width: "45%" }}
                />
                <ActionButton
                  label={"PARTAGER"}
                  onPress={fun}
                  color={Colors.green}
                  style={{ marginTop: 14, width: "45%", marginLeft: 20 }}
                />
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: "5%",
  },
});

export default Home;
