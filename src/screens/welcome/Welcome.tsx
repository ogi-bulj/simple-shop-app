import { View, Text } from "react-native";
import { styles } from "./Welcome.styles";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins_300Light" }}>Welcome to</Text>
      <Text style={{ fontFamily: "BaiJamjuree_700Bold" }}>Simple Shop</Text>
    </View>
  );
};

export default Welcome;
