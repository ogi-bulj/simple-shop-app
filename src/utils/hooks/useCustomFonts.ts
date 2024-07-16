import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { Poppins_300Light } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function useCustomFonts() {
  const [loaded, error] = useFonts({
    BaiJamjuree_700Bold,
    Poppins_300Light,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
}
