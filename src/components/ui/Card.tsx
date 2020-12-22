import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from 'react-native';

type Card = {
    style?: ViewStyle;
};

const Card: FunctionComponent<Card> = ({ children, style }) => {
    if (Platform.OS === 'ios') {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ ...styles.card, ...style }}
            >
                {children}
            </KeyboardAvoidingView>
        );
    }
    return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 4,
        borderRadius: 6,
        backgroundColor: 'white',
    },
});

export default Card;
