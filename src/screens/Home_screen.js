import React from "react";
import { View, Text,SafeAreaView, StyleSheet, Button } from "react-native";


export default function Home_screen( { navigation } ){
    return(
        <View
            style = {{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#c7e1f7"}}
        >
            <Text style = {{fontSize:30}}>
                Home screen
            </Text>
            
            

        </View>
    );
}
