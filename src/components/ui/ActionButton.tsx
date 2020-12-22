import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View,
    ActivityIndicator,
    ViewStyle,
} from 'react-native';

import DefaultTextBold from './DefaultTextBold';
import Colors from '../../constants/Colors';

type ActionButton = {
    label: string;
    onPress: (event: any) => void;
    color?: string;
    style?: ViewStyle;
    loading?: boolean;
    btnText?: string;
};

const ActionButton: FunctionComponent<ActionButton> = ({
                                                           label,
                                                           onPress,
                                                           color,
                                                           style,
                                                           loading,
                                                           btnText,
                                                       }) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableOpacity
                testID="actionButtonAndroid"
                style={{
                    height: 40,
                    backgroundColor: color || Colors.green,
                    borderRadius: 6,
                    ...style,
                }}
            >
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={{ ...styles.submitButton, flex: 1 }}>
                        {loading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <DefaultTextBold
                                style={{ color: btnText ? btnText : 'white', ...styles.btnTextStyle }}
                            >
                                {label}
                            </DefaultTextBold>
                        )}
                    </View>
                </TouchableNativeFeedback>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity testID="actionButtonIOS" onPress={onPress} activeOpacity={0.5}>
            <View
                pointerEvents={loading ? 'none' : 'auto'}
                style={{
                    ...style,
                    ...styles.submitButtonIOS,
                    backgroundColor: color || Colors.green,
                }}
            >
                {/* tslint:disable-next-line:max-line-length */}
                {loading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <DefaultTextBold style={{ color: btnText ? btnText : 'white', ...styles.Text }}>
                        {label}
                    </DefaultTextBold>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    submitButtonIOS: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
    submitButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 15,
    },
    btnTextStyle: {
        fontSize: 15,
    },
});

export default ActionButton;
