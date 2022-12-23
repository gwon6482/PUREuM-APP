import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homesvgimport from "../svgs/home_icon_svg";
import Calendarsvgimport from "../svgs/calendericon_svg"
import Filessvgimport from "../svgs/filesicon_svg"
import Settingsvgimport from "../svgs/settingicon_svg"


import Home_screen from "../screens/Home_screen";
import Calendar_screen from "../screens/Calendar_screen";
import Files_screen from "../screens/Files_screen";
import Setting_screen from "../screens/Setting_screen";

const Tabbar = createBottomTabNavigator();

export default function Home_navigation(){
    return(
        <Tabbar.Navigator
        screenOptions={{
            headerShown : false
        }}
        >
            
            <Tabbar.Screen
                name="Home"
                component={Home_screen}
                options = {{
                    tabBarIcon :() => (<Homesvgimport/>) 
                }}
            />
            <Tabbar.Screen
                name="Calendar"
                component={Calendar_screen}
                options = {{
                    tabBarIcon :() => (<Calendarsvgimport/>) 
                }}
            />
            <Tabbar.Screen
                name="Files"
                component={Files_screen}
                options = {{
                    tabBarIcon :() => (<Filessvgimport/>) 
                }}
            />
            <Tabbar.Screen
                name="Setting"
                component={Setting_screen}
                options = {{
                    tabBarIcon :() => (<Settingsvgimport/>) 
                }}
            />

            

        </Tabbar.Navigator>
    );
}
