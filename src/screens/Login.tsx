import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import Input from "../components/ui/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import DefaultText from "../components/ui/DefaultText";
import ActionButton from "../components/ui/ActionButton";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [statePwd, setStatePwd] = useState({
    iconState: "eye-slash",
    secureState: true,
  });
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ flex: 1, flexDirection: "column", paddingVertical: "20%" }}
      >
        <View style={{ paddingHorizontal: 15, margin: "5%" }}>
          <Image
            source={require("../../assets/uac-mcf.png")}
            style={styles.image}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginVertical: 10,
            paddingHorizontal: "10%",
          }}
        >
          <Input
            label={"Identifiant"}
            inputConfig={{
              autoCapitalize: "none",
              /* value: values.username,
                            onChangeText: handleChange('username'),
                            onBlur: handleBlur('username'), */
              placeholder: "Entrez votre Identifiant",
              placeholderTextColor: "#071AAB80",
            }}
            touched={"error"}
            error={""}
            styleInput={styles.input}
          />

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Input
                inputConfig={{
                  keyboardType: "default",
                  autoCapitalize: "none",
                  secureTextEntry: statePwd.secureState,
                  placeholder: "Mot de passe",
                  placeholderTextColor: "#071AAB80",
                }}
                label={"Mot de passe"}
                error={""}
                touched={""}
                styleInput={styles.input}
              />
            </View>
            <TouchableOpacity
              style={{ padding: 5, marginTop: "12%" }}
              onPress={() =>
                setStatePwd({
                  iconState: "eye-slash",
                  secureState: !statePwd.secureState,
                })
              }
            >
              <FontAwesome5
                name={statePwd.secureState === true ? "eye-slash" : "eye"}
                size={17}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ padding: 5, marginTop: 5, alignItems: "center" }}
          >
            <DefaultText style={{ color: "blue" }}>
              Mot de passe oublié ?
            </DefaultText>
          </TouchableOpacity>
          <View style={{ marginTop: "5%" }}>
            <ActionButton
              label={"Se connecter"}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <TouchableOpacity
            style={{
              padding: 5,
              marginTop: 5,
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            <DefaultText style={{ color: Colors.dark }}>
              Vous n'avez pas de compte ?{" "}
            </DefaultText>
            <DefaultTextBold
              style={{ color: Colors.red, textDecorationLine: "underline" }}
            >
              S'inscrire
            </DefaultTextBold>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    padding: 15,
    width: 300,
    height: 60,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    alignContent: "center",
  },
  input: {
    borderWidth: 0,
    backgroundColor: "#c6c6c6",
    color: "white",
    // textAlign: 'center',
    paddingLeft: 15,
    textAlignVertical: "center",
    borderRadius: 10,
    fontFamily: "regular",
    fontSize: 14,
    height: 46,
  },
});
export default Login;
