import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 18,
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Ionicons name="settings" size={24} color="black" />
            </TouchableOpacity>
            <Image source={require('../../../assets/Logo_UAC.png')} style={{width: 40, height: 42}} />
            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
export default Header ;
