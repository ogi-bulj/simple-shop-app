import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SingleProduct, Welcome } from "../screens";
import { NavigationProp } from "@react-navigation/native";
import Header from "../components/header/Header";
import { Product } from "../types/Product";

export type ScreenNames = ["Welcome", "Home", "Single Product"];
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  "Single Product": { product: Product };
};
export type AppNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Single Product"
        component={SingleProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
