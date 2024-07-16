import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import useCustomFonts from "./src/utils/hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useCustomFonts();
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AppNavigator />
    </NavigationContainer>
  );
}
