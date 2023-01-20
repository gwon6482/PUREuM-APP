import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View, ScrollView, Image, Dimensions,TouchableHighlight, TouchableOpacity  } from 'react-native';
import { React,useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import   Constants  from 'expo-constants';
import { SafeAreaView } from 'react-navigation'

//import Icon from 'react-native-vector-icons/Ionicons';


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
    let box1_size = 400


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
                      contentContainerStyle = {{
                        
                      }}
                      showsVerticalScrollIndicator = {false}
                      
                      >

                      <View 
                        style = { styles.HomeContentsBox_L1} >
                        <Text style = { styles.HomeContentsText_H1} >
                          이번주 말씀
                        </Text>

                      <View style = { styles.HomeContentsShadowbox}>
                        <View style = {styles.HomeContentsBox_L2}>
                          
                        <View style = {styles.HomeContentsBox_L3}>
                          <Text style = { styles.HomeContentsText_H2} > 
                            창세기 25 : 21
                          </Text>

                          <Text style = { styles.HomeContentsText_C1 } > 
                            이삭이 그의 아내가 임신하지 못하므로 그를 위하여 여호와께 간구하매 여호와께서 그의 간구를 들으셨으므로 그의 아내 리브가가 임신하였더니
                          </Text>
                        </View>
                      </View>
                      
                      </View>


                      </View>
                      <View style = {{backgroundColor:"#2aabae"}} ></View>
                      <View style = {{height:R_SIZE(400), backgroundColor:"#8ae6e8"}} ></View>
                      <View style = {{height:R_SIZE(400), backgroundColor:"#bceaeb" }} ></View>
                      
                      

                    </ScrollView>

                    <TouchableOpacity 
                      style={styles.TouchableOpacityStyle} 
                      
                      >

                      <Image 
                        source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                        style={styles.FloatingButtonStyle} />

                    </TouchableOpacity> 

                    



                    
        
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

      contents_area_style : {
        flex:100,
        justifyContent: 'center'
      },


      TouchableOpacityStyle:{

        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: R_SIZE(24),
        bottom: R_SIZE(116),
      },

      TouchableOpacityStyle2:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: R_SIZE(90),
        bottom: R_SIZE(116),
      },
   
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: R_SIZE(60),
        height: R_SIZE(60),
      },

      HomeContentsBox_L1 : {
        backgroundColor:"#fff",
        borderWidth:0
      },

      HomeContentsBox_L2 : {
        paddingLeft : R_SIZE(20),
        paddingRight : R_SIZE(20),
        borderWidth : 0,
        paddingBottom :0,
        paddingTop: R_SIZE(5),
        
      },

      HomeContentsBox_L3 : {
          borderWidth :0,
          borderRadius : 30,
          paddingLeft : R_SIZE(20),
          paddingRight: R_SIZE(20),
          paddingTop : R_SIZE(10),
          paddingBottom: R_SIZE(10),
          backgroundColor:"white",
          borderRadius:15,
          elevation:10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          marginBottom : 10
          
      },

      HomeContentsText_H1 : {
        color: '#87C5CA'  ,
        fontFamily : 'SUIT-Medium',
        fontSize: R_SIZE(34),
        paddingLeft : R_SIZE(36),
      },

      HomeContentsText_H2 : {
        fontFamily : 'SUIT-Light',
        fontSize: R_SIZE(22),
        paddingBottom : 10
      },

      HomeContentsText_C1 : {
        fontFamily : 'SUIT-Light',
        fontSize: '16'
      },

      HomeContentsShadowbox : {
        
        
        
      },

})
