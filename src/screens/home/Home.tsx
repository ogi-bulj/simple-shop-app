import { FlatList, ScrollView } from "react-native";
import { styles } from "./Home.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListItem from "../../components/listItem/ListItem";
import { useState } from "react";
import DATA from "../../__mocks__/products.json";
import { AppNavigation } from "../../navigation/AppNavigator";

interface HomeProps {
  navigation: AppNavigation;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [products, setProducts] = useState(DATA);
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        {products.length > 0 ? (
          <FlatList
            numColumns={2}
            scrollEnabled={false}
            data={products}
            renderItem={(data) => (
              <ListItem
                onItemPress={() => {
                  navigation.navigate("Single Product");
                }}
                image={data.item.mainImageUrl}
                brand={data.item.brandName}
                name={data.item.name}
                price={data.item.price}
                key={data.item.productId}
              />
            )}
          />
        ) : null}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Home;
