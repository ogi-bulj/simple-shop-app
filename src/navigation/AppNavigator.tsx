import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SingleProduct, Welcome } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen name="Register" component={SingleProduct} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
