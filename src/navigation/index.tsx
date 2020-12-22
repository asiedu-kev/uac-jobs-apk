import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import Login from "../screens/Login";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import {StyleSheet} from "react-native";
import OpportunitiesScreen from "../screens/OpportunitiesScreen";
import AdminChatScreen from "../screens/AdminChatScreen";
import SettingsScreen from '../screens/SettingsScreen' ;
import { useNavigation } from '@react-navigation/native'
import NotificationScreen from "../screens/NotificationScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import ActualityDetailScreen from "../screens/ActualityDetailScreen";
import OpportunityDetailScreen from "../screens/OpportunityDetailScreen";

const Stack=createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

 export  const  Activity = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name={"Registration"} component={RegistrationScreen} />
        <Stack.Screen name="Home" component={MyTabs} options={{
            headerShown: false
        }}  />
        <Stack.Screen name={"ActualityDetail"} component={ActualityDetailScreen} />
        <Stack.Screen name={"OpportunityDetail"} component={OpportunityDetailScreen} />
    </Stack.Navigator>
    )
}
const MyTabs = () => (
        <Tab.Navigator shifting={true} backBehavior={"none"} activeColor={Colors.green} inactiveColor={Colors.dark}>
            <Tab.Screen name="Actualités" component={ActualityNavigator}
                        options={{
                tabBarIcon:() => <Ionicons name="newspaper" size={25} color={Colors.dark}  style={styles.icon} />,
                tabBarColor: Colors.white,
            }}/>
            <Tab.Screen name="Opportunités" component={OpportunitiesScreen}
                        options={{
                            tabBarIcon:() => <MaterialIcons name="work"
                                                            size={25}  style={styles.icon}
                                                            color={Colors.dark}/>,
                            tabBarColor: Colors.white
                        }}
            />
            <Tab.Screen name="Chats" component={AdminChatScreen}
                        options={{
                            tabBarIcon:() => <Ionicons name="chatbox"
                                                       size={25}  style={styles.icon}
                                                       color={Colors.dark}/>,
                            tabBarColor: Colors.white,
                        }}/>
        </Tab.Navigator>
)

const ActualityNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name={"Settings"} component={SettingsScreen} />
        <Stack.Screen name={"Notifications"} component={NotificationScreen} />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    icon: {
        padding: '5%',
    },
})
