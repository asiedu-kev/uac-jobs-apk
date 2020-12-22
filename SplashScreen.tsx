import React from 'react';
import {Image, StyleSheet, View, ActivityIndicator} from 'react-native';

export  const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Image source={require('./assets/Logo_UAC.png')} style={styles.image}/>
            <ActivityIndicator color={'#555a78'} size={"large"} />
        </View>
    )
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image : {
        justifyContent: 'center',
        width: 350,
        height: 400,
        marginVertical: 50
    }
})
