import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigations/AuthNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  );
}
