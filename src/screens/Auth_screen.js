import React from "react";
import { Text, View, SafeAreaView, TextInput,StyleSheet, TouchableOpacity } from "react-native";



export default function Auth_screen( { navigation } ){
    return (
        <SafeAreaView style = {{flex:1, justifyContent:"center"}}>
            <View style = {{alignItems:"center",justifyContent:"center"}}>
                <Text style = {{fontSize:30}}>
                    welcome to PUREuM APP
                </Text>
                <Text>
                    please input your access code
                </Text>
            </View>


            <View style = {{}}>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                />
            </View>

            <View style = {{justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity
                    style = {{backgroundColor:'#c2feff',height:50,width:280,borderRadius:20,justifyContent:"center",alignItems:"center"}}
                    onPress = {() => navigation.navigate("home navitation")}
                >
                    <Text
                        style = {{fontSize: 18}}
                    >press me</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        
    }
  });