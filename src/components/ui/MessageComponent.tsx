import React from 'react';
import {StyleSheet, View, ViewStyle} from "react-native";
import DefaultText from "./DefaultText";

interface IMessage {
    message: string;
    time: string;
    style?: ViewStyle;
    color?:string;
}

const MessageComponent = ({ message, time, style, color}: IMessage) => {
    return (
    <View style={{ backgroundColor: color ? color :'#D7E8F2', ...style,...styles.container}}>
        <DefaultText>{message}</DefaultText>
        <DefaultText style={styles.time}>{time}</DefaultText>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 2,
        borderRadius: 6,
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 12
    },
    time: {
        position: "absolute",
        right: 5,
        bottom:0,
        fontSize: 10
    }
});

export default  MessageComponent ;
