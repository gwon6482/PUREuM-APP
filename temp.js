import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View, ScrollView, Image, Dimensions,TouchableHighlight  } from 'react-native';
import { useFonts } from 'expo-font';
import { React,useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import   Constants  from 'expo-constants';
import { SafeAreaView } from 'react-navigation'


// svg image import
import Alarmsvgimport from "./assets/svgs/bellicon_svg";
import Homesvgimport from "./assets/svgs/home_icon_svg"
import Calendarsvgimport from "./assets/svgs/calendericon_svg"
import Filessvgimport from "./assets/svgs/filesicon_svg"
import Settingsvgimport from "./assets/svgs/settingicon_svg"


console.log("rendering start")

const SCREEM_WIDTH = Dimensions.get("window").width
const SCREEM_HEIGHT = Dimensions.get("window").height
console.log("세로: ",SCREEM_HEIGHT," 가로: ",SCREEM_WIDTH)

function R_SIZE(x){
  return (SCREEM_WIDTH / 428) * x
}

function HomeButton_onPress(){
  console.log('Home button pressed!!')
}

function CalendarButton_onPress(){
  console.log('Calendar button pressed!!')
}

function FilesButton_onPress(){
  console.log('Files button pressed!!')
}

function SettingButton_onPress(){
  console.log('Setting button pressed!!')
}

function AlarmButton_onPress(){
  console.log('Alarm button pressed!!')
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'Tumbly': require('./assets/fonts/Tumbly.otf'),
    'Nokio': require('./assets/fonts/NokioMedium.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style = {[styles.screen, {backgroundColor:"#fbfbfb"}]}>
      <View style = {styles.container}>
        
        <View style = {styles.header_area_style}>
          {/** Header area */}
          <View style = {{flex:1}} ></View>
          <View style = {styles.header_bannerbox_area_style} >
            {/** banner textbox */}
            <Text style = {styles.header_mainbanner_font_style}>PUREuM</Text>
            <Text style = {styles.header_subbanner_font_style}>we worship god</Text>
          </View>
          <View style = {{flex:18.6}} ></View>

          <TouchableHighlight
              onPress={AlarmButton_onPress}
              activeOpacity = {1}
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


        <View style = {styles.container}>
          {/** contents box */}
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
          


        <View style = {styles.Tabbar_area_style} > 
          {/** Tabbar area */}


          <TouchableHighlight
              onPress={HomeButton_onPress}
              activeOpacity = {1}
              underlayColor = {'#fff'}
              style = {{flex:1, justifyContent:"center"}}
              >
             <View style={styles.Tabbar_button_area_style}>
            {/** home button area */}

              <View style ={styles.Tabbar_button_icon_style} id = {"ss"}
              >
                <Homesvgimport/>
              </View> 

            <View style = {styles.Tabbar_font_box_style}>
              <Text style = {styles.Tabbar_font_style}>Home</Text>
            </View>
            
            
            </View>
          </TouchableHighlight>
         

          <TouchableHighlight
              onPress={CalendarButton_onPress}
              activeOpacity = {1}
              underlayColor = {'#fff'}
              style = {{flex:1}}
              >
            <View style={styles.Tabbar_button_area_style}>
            {/** calender button area*/}

              <View style = {styles.Tabbar_button_icon_style}>
                <Calendarsvgimport />
              </View>
            
            <View style = {styles.Tabbar_font_box_style}>
              <Text style = {styles.Tabbar_font_style}>
                Calendar
              </Text>
            </View>

          </View>
          </TouchableHighlight>
          


          <TouchableHighlight
              onPress={FilesButton_onPress}
              activeOpacity = {1}
              underlayColor = {'#fff'}
              style = {{flex:1}}>
            <View style={styles.Tabbar_button_area_style}>
            {/** files button area */}

            
              <View style ={styles.Tabbar_button_icon_style}>
                <Filessvgimport/>
              </View>
            

            <View style = {styles.Tabbar_font_box_style}>
              <Text style = {styles.Tabbar_font_style}>
                Files
              </Text>
            </View>
            </View>
          </TouchableHighlight>


          <TouchableHighlight
              onPress={SettingButton_onPress}
              activeOpacity = {1}
              underlayColor = {'#fff'}
              style = {{flex:1}}
              >
            <View style={styles.Tabbar_button_area_style}>
              {/** setting button area */}

              
                
                <View style ={styles.Tabbar_button_icon_style}>
                  <Settingsvgimport/>
                </View>

              <View style = {styles.Tabbar_font_box_style}>
                <Text style = {styles.Tabbar_font_style}>
                  Setting
                </Text>
              </View>
            </View>

          </TouchableHighlight>
          
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  screen:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: R_SIZE(34),
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
  }

  ,
  contents_area_style: {
    flex:100,
    backgroundColor: "#2f2f2f"
  },





  Tabbar_area_style: {
    flex:8,
    backgroundColor: "#fbfbfb",
    flexDirection:"row",
    //borderWidth:1
    //marginTop: R_SIZE(10)
  },
  Tabbar_button_area_style:{
    flex:1,
    justifyContent: "center",
    backgroundColor:"#fff",
    //borderWidth:1
  },

  Tabbar_button_icon_style: {
    backgroundColor: "#fff",
    alignItems:"center",
    flex:4,
    //borderWidth:1,
    justifyContent:"center"
    //marginBottom: R_SIZE(6)
  },
  Tabbar_font_box_style: {
    justifyContent: "center",
    alignItems:"center",
    backgroundColor : "#fff",
    flex:1,
    //borderWidth:1
  },
  Tabbar_font_style: {
    fontFamily: 'Nokio',
    fontSize: R_SIZE(11),
    color: '#646464',
    backgroundColor : "#fff",

    
    
  }


});


/**
 * pt
 *              
 *            11promax / 14promax / ratio
 * status bar : 44  / 54 / 6
 * 
 * header : 94  / 114 / 13
 * 
 * contents : 677 / 830 / 100
 * 
 * tabbar : 50 /  60 / 7.3
 * 
 */

// test something 
// test somethong 2
// pull test
