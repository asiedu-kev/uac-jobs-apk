import React from "react";
import { ScrollView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DefaultTextBold from "../components/ui/DefaultTextBold";
import DefaultText from "../components/ui/DefaultText";
import ActionButton from "../components/ui/ActionButton";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ActualityDetailScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: "",
    headerRight: () => (
      <MaterialCommunityIcons
        name="dots-vertical"
        size={24}
        color="black"
        style={{ paddingHorizontal: 14 }}
      />
    ),
  });
  return (
    <ScrollView>
      <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
        <View style={{ paddingBottom: 10 }}>
          <DefaultTextBold style={{ fontSize: 20 }}>
            L'UNICEF RECRUTE !
          </DefaultTextBold>
          <DefaultText> 3min</DefaultText>
        </View>
        <DefaultText style={{ fontFamily: "openSans-regular" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </DefaultText>
        <Image
          source={require("../../assets/actuality.png")}
          style={{ width: 300 }}
          resizeMode={"stretch"}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <ActionButton
            label={"POSTULEZ"}
            onPress={() => navigation.navigate("ActualityDetail", navigation)}
            color={Colors.green}
            style={{ marginTop: 14, width: "45%" }}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default ActualityDetailScreen;
