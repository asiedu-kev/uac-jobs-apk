import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/ui/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import DefaultText from "../components/ui/DefaultText";
import ActionButton from "../components/ui/ActionButton";
import Colors from "../constants/Colors";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import { Formik } from "formik";
import { validateRegistration } from "../helpers/validationSchema";
import * as Yup from "yup";

const RegistrationScreen = () => {
  const [statePwd, setStatePwd] = useState({
    iconState: "eye-slash",
    secureState: true,
  });
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });

  const handleFormSubmit = () => navigation.navigate("Login");

  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1, flexDirection: "column", paddingVertical: "20%" }}
      >
        <View style={{ paddingHorizontal: 15, margin: "5%" }}>
          <Image
            source={require("../../assets/uac-mcf.png")}
            style={styles.image}
          />
        </View>
        <Formik
          initialValues={{
            email: "",
            last_name: "",
            first_name: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validateRegistration}
          onSubmit={handleFormSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginVertical: 10,
                paddingHorizontal: "10%",
              }}
            >
              <Input
                label={"Nom"}
                inputConfig={{
                  autoCapitalize: "none",
                  /* value: values.username,
                            onChangeText: handleChange('username'),
                            onBlur: handleBlur('username'), */
                  placeholder: "Entrez votre nom",
                  placeholderTextColor: "#071AAB80",
                  value: values.last_name,
                }}
                onChange={handleChange("last_name")}
                touched={"error"}
                error={errors.last_name}
                styleInput={styles.input}
              />
              <Input
                label={"Prénom(s)"}
                inputConfig={{
                  autoCapitalize: "none",
                  /* value: values.username,
                            onChangeText: handleChange('username'),
                            onBlur: handleBlur('username'), */
                  placeholder: "Entrez votre prénom",
                  placeholderTextColor: "#071AAB80",
                  value: values.last_name,
                }}
                touched={"error"}
                error={errors.first_name}
                styleInput={styles.input}
              />
              <Input
                label={"Email"}
                inputConfig={{
                  textContentType: "emailAddress",
                  autoCapitalize: "none",
                  /* value: values.username,
                            onChangeText: handleChange('username'),
                            onBlur: handleBlur('username'), */
                  placeholder: "Entrez votre adresse mail",
                  placeholderTextColor: "#071AAB80",
                  value: values.email,
                }}
                touched={"error"}
                error={errors.email}
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
                      value: values.password,
                    }}
                    label={"Mot de passe"}
                    error={errors.password}
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
              <View style={{ marginTop: 10, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Input
                    inputConfig={{
                      keyboardType: "default",
                      autoCapitalize: "none",
                      secureTextEntry: statePwd.secureState,
                      placeholder: "Confirmer votre mot de passe",
                      placeholderTextColor: "#071AAB80",
                    }}
                    label={"Confirmation de mot de passe"}
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
              <View style={{ marginTop: "5%" }}>
                <ActionButton
                  label={"S'inscrire"}
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
                onPress={handleSubmit}
              >
                <DefaultText style={{ color: Colors.dark }}>
                  Vous avez déjà un compte ?{" "}
                </DefaultText>
                <DefaultTextBold
                  style={{ color: Colors.red, textDecorationLine: "underline" }}
                >
                  Se connecter
                </DefaultTextBold>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
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
export default RegistrationScreen;
