import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View, ScrollView, Image, Dimensions,TouchableHighlight  } from 'react-native';
import { React,useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import   Constants  from 'expo-constants';
import { SafeAreaView } from 'react-navigation'


import Alarmsvgimport from '../../assets/svgs/bellicon_svg';


const SCREEM_WIDTH = Dimensions.get("window").width
const SCREEM_HEIGHT = Dimensions.get("window").height
console.log("세로: ",SCREEM_HEIGHT," 가로: ",SCREEM_WIDTH)

function R_SIZE(x){
    return (SCREEM_WIDTH / 428) * x
  }

function alarm_button_press(){
    console.log('alarm button press!!')
}
export default function Home_screen( { navigation } ){

    return(
        <SafeAreaView style = {styles.screen}>
            <View style = {styles.container}>
                <View style = {styles.header_area_style}>
                    {/** Header area */}
                    <View style = {{flex:1}} ></View>
                    <View style = {styles.header_bannerbox_area_style}>
                        {/** banner */}
                        <Text style = {styles.header_mainbanner_font_style}>PUREuM</Text>
                        <Text style = {styles.header_subbanner_font_style}>we worship god</Text>
                    </View>
                    <View style = {{flex:18.6}}></View>
                    <TouchableHighlight
                    onPress={alarm_button_press}
                    activeOpacity = {0}
                    underlayColor = {'#fff'}
                    style = {styles.header_bellbox_style}
                    >
                    <View>
                        {/** alarm bell icon */}
                        <Alarmsvgimport />
                    </View>

                    </TouchableHighlight>
                    <View style = {{flex:1}} ></View>
                    </View>
                


                <View style = {styles.contents_area_style}>
                    {/** main contents */}

                    <ScrollView 
                    contentContainerStyle = {{}}
                    showsVerticalScrollIndicator = {false}
                    >
                    <View style = {{height : 400, backgroundColor:"#37e8ec"}} ></View>
                    <View style = {{height : 400, backgroundColor:"#2aabae"}} ></View>
                    <View style = {{height : 400, backgroundColor:"#8ae6e8"}} ></View>
                    <View style = {{height : 400, backgroundColor:"#bceaeb"}} ></View>
                    <View style = {{height : 400}} ></View>
                    

                    </ScrollView>
        
                </View>


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        paddingTop: Constants.statusBarHeight,
        // paddingBottom: R_SIZE(34),
        backgroundColor: "#fff"
        
    },
    container: {
        flex: 100,
        backgroundColor: '#fff',
        
        
      },

    header_area_style: {
        backgroundColor: '#fff',
        flex:13,
        flexDirection: "row",
        //borderWidth:1
      },
      header_bannerbox_area_style: {
        //borderWidth:1,
        flex:18,
        justifyContent:"center",
        alignItems:"center"
      },
      header_mainbanner_font_style: {
        fontSize: R_SIZE(33),
        fontFamily: 'Tumbly',
        color: '#59ADB2',
      },
      header_subbanner_font_style: {
        fontSize: R_SIZE(18),
        fontFamily: 'Nokio',
        color: '#000',
      },
      header_bellbox_style : {
        //borderWidth:1,
        flex:4.4,
        justifyContent: "center",
        alignItems:"center"
      },


    contents_area_style: {
        flex:100,
        backgroundColor: "#fff"
      },

})
