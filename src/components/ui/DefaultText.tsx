import React, {FunctionComponent} from 'react';
import {TextProps,Text,  View, StyleSheet} from 'react-native';

const DefaultText: FunctionComponent<TextProps> = ({ style,...props}) => {
    style = style as {};
    return (
        <Text {...props} style={{...styles.text,...style}}>
            {props.children}
        </Text>
    )
};
const styles = StyleSheet.create({
    text: {
        fontFamily: 'openSans-regular'
    }
});

export default DefaultText ;
