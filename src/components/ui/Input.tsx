import React,{FunctionComponent} from 'react';
import {StyleSheet, TextInputProps, TextStyle, TextInput , View} from "react-native";
import Colors from "../../constants/Colors";
import DefaultText from "./DefaultText";
import DefaultTextBold from "./DefaultTextBold";

type Input = {
    inputConfig: TextInputProps,
    touched: unknown;
    label?: string;
    error: unknown;
    viewOnly?: boolean;
    styleInput?: TextStyle;
}
const Input: FunctionComponent<Input> = ({
    inputConfig,
    touched,
    label,
    error,
    styleInput,
    viewOnly,
}) => {
    let borderColor;
    if (error && !viewOnly ) {
        borderColor = Colors.red
    }
    else {
        borderColor = Colors.dark
    }
    return (
        <View style={styles.inputContainer}>
            <DefaultTextBold style={styles.label}>{label?.toUpperCase()}</DefaultTextBold>
            <TextInput
                {...inputConfig}
                style={{
                    height: inputConfig.multiline ? 80 : 40,
                    borderColor,
                    ...(styleInput || styles.input),
                }}
            />
            {error && touched ? <DefaultText style={styles.errorMessage}>{error}</DefaultText> : null}
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 4,
    },
    input: {
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        backgroundColor: 'white',
    },
    errorMessage: {

    },
    label: {
        fontSize: 15,
        marginBottom: 5,
    },
});
export default Input;
