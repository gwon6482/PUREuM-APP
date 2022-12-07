import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Auth_screen from "../screens/Auth_screen";
import Home_navigation from "./HomeNavigation";

const Stack = createNativeStackNavigator();


export default function AuthNavigation() {
    console.log('stack');
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >

            <Stack.Screen
                name="auth screen"
                component={Auth_screen}
            />

            <Stack.Screen
                name="home navitation"
                component={Home_navigation}
            />

            

        </Stack.Navigator>
    )
}