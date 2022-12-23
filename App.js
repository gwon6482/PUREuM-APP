import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigations/AuthNavigation";
import { useFonts } from 'expo-font';
import { React,useCallback } from 'react';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Tumbly': require('./src/fonts/Tumbly.otf'),
    'Nokio': require('./src/fonts/NokioMedium.ttf'),
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
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  );
}
