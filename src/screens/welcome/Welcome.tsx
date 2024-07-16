import { View, Text, Pressable } from "react-native";
import { styles } from "./Welcome.styles";
import StoreIcon from "../../assets/svgs/StoreIcon";
import { AppNavigation } from "../../navigation/AppNavigator";

interface WelcomeProps {
  navigation: AppNavigation;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.title}>simple shop</Text>
      </View>
      <StoreIcon color="#000000" height="120" />
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>continue</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;
