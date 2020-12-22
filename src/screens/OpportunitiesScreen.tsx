import React, { useState } from "react";
import {
  Picker,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Header from "../components/ui/Header";
import { Divider } from "react-native-paper";
import SearchBar from "../components/ui/SearchBar";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FAB } from "react-native-paper";
import Card from "../components/ui/Card";
import DefaultText from "../components/ui/DefaultText";
import ActionButton from "../components/ui/ActionButton";

const OpportunitiesScreen = () => {
  const [text, setText] = useState(null);
  const [filter, setFilter] = useState(false);
  const navigation = useNavigation();
  navigation.setOptions({
    tabBarIcon: () => (
      <MaterialIcons
        name="work"
        size={25}
        color={navigation.isFocused() ? Colors.green : Colors.dark}
        style={styles.icon}
      />
    ),
  });

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
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          {filter ? (
            <Picker mode={"dropdown"} style={{ width: 100 }}>
              <Picker.Item label={"Tous"} />
              <Picker.Item label={"Opportunités"} />
              <Picker.Item label={"Jobs"} />
            </Picker>
          ) : (
            <SearchBar
              value={text}
              onChange={setText}
              onSubmit={() => null}
              onClear={() => setText(null)}
              placeholder={"Rechercher une opportunité"}
            />
          )}
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {/*<DefaultTextBold style={{marginVertical: '50%'}}>Aucune opportunité disponible</DefaultTextBold> */}
          <Divider style={{ borderTopWidth: 0.1999 }} />
          <ScrollView
            style={{ flex: 1, paddingHorizontal: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/*<DefaultTextBold style={{marginVertical: '50%'}}>Aucune actualité disponible</DefaultTextBold> */}
            {[1, 2, 3, 5, 8, 8, 5, 5, 5, 8, 9, 9, 10, 15, 28, 18].map(
              (item) => (
                <Card style={{ padding: 15, marginVertical: 12 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <DefaultTextBold style={{ fontSize: 18 }}>
                      L'UNICEF RECRUTE !
                    </DefaultTextBold>
                    <MaterialIcons name="work" size={25} color={Colors.dark} />
                  </View>
                  <DefaultText style={{ fontSize: 10, fontStyle: "italic" }}>
                    2 h{" "}
                  </DefaultText>
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
                      label={"VOIR DÉTAILS"}
                      onPress={() => navigation.navigate("OpportunityDetail")}
                      color={Colors.dark}
                      style={{ marginTop: 14, width: "95%" }}
                      loading={false}
                    />
                  </View>
                </Card>
              )
            )}
          </ScrollView>
        </View>
      </View>
      <FAB
        style={styles.fab}
        icon={!filter ? "filter" : "magnifying glass"}
        onPress={() => setFilter(!filter)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  icon: {
    padding: "5%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.green,
  },
});
export default OpportunitiesScreen;
