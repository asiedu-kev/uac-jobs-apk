import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Feather, FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import Header from "../components/ui/Header";
import { Divider } from "react-native-paper";
import SearchBar from "../components/ui/SearchBar";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import MessageComponent from "../components/ui/MessageComponent";

const AdminChatScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    tabBarIcon: () => (
      <Ionicons
        name="chatbox"
        size={25}
        color={navigation.isFocused() ? Colors.green : Colors.dark}
        style={styles.icon}
      />
    ),
  });
  const [text, setText] = useState(null);
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 18,
            // backgroundColor: Colors.grey
          }}
        >
          <DefaultTextBold>Assistance BSE</DefaultTextBold>
          <TouchableOpacity>
            <Octicons name="info" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Divider style={{ borderTopWidth: 0.2999 }} />
        <ScrollView style={{ flex: 1, paddingVertical: 5 }}>
          {/*<DefaultTextBold style={{marginVertical: '50%'}}>Aucun message écrit</DefaultTextBold> */}
          <MessageComponent
            message={"Hello\nMy name is Josh and i need a help with something."}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"17:55"}
          />
          <MessageComponent
            message={"Hello\nI'm Fanick\nHow can i help you please ?"}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-start",
              marginRight: "1%",
              marginVertical: 10,
            }}
            color={"white"}
            time={"17:56"}
          />
          <MessageComponent
            message={
              "I want to sumit to a job.But i don't understand how i can do ?"
            }
            style={{
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"17:58"}
          />
          <MessageComponent
            message={
              "Ah Sure\n.I'm listenning to you.Give me more informations please."
            }
            style={{
              maxWidth: "70%",
              alignSelf: "flex-start",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"17:59"}
            color={"white"}
          />
          <MessageComponent
            message={"Ok\nMy name is Josh"}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"18:00"}
          />
          <MessageComponent
            message={"It is about UNICEF"}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"18:02"}
          />
          <MessageComponent
            message={"Ah Sure\n.Let's me send you a completion."}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-start",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"18:05"}
            color={"white"}
          />
          <MessageComponent
            message={
              "Les Fonds des Nations unies pour l'enfance, généralement désigné par" +
              " l'acronyme Unicef (également typographié UNICEF), est une agence de l'Organisation des Nations " +
              "unies consacrée à l'amélioration et à la promotion de la condition des enfants. Lors de sa création " +
              "le 11 décembre 19461, son nom était originellement United Nations International Children's Emergency " +
              "Fund (Fonds d'urgence international des Nations unies pour l'enfance), dont elle a conservé" +
              " l'acronyme lors de l'adoption de son nom actuel en 1953, lorsqu'elle est devenue un organe " +
              "permanent du système des Nations unies.\n" +
              "\n" +
              "Elle a activement participé à la rédaction, la conception et la promotion de la Convention " +
              "relative aux droits de l'enfant (CIDE), adoptée lors du sommet de New York le 20 novembre 1989."
            }
            style={{
              maxWidth: "70%",
              alignSelf: "flex-start",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"18:05"}
            color={"white"}
          />
          <MessageComponent
            message={"Okay Thanks"}
            style={{
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginRight: "1%",
              marginVertical: 10,
            }}
            time={"18:09"}
          />
        </ScrollView>
        <Divider style={{ borderTopWidth: 0.199 }} />
        <KeyboardAvoidingView
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            justifyContent: "space-between",
            backgroundColor: Colors.grey,
            paddingHorizontal: 20,
          }}
        >
          <FontAwesome name="paperclip" size={30} color={Colors.green} />
          <TextInput
            style={{
              fontFamily: "font-bold",
              fontSize: 16,
              padding: 8,
              borderBottomColor: Colors.grey,
              borderWidth: 0.0,
              elevation: 3,
              backgroundColor: "white",
              borderRadius: 25,
              width: "78%",
            }}
            placeholder="Tapez votre message"
            multiline={true}
          />
          <Ionicons name="ios-send" size={30} color={Colors.green} />
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  icon: {
    padding: "5%",
  },
});

export default AdminChatScreen;
