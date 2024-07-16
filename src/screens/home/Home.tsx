import { FlatList, ScrollView } from "react-native";
import { styles } from "./Home.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListItem from "../../components/listItem/ListItem";
import { useState } from "react";
import DATA from "../../__mocks__/products.json";
import { AppNavigation } from "../../navigation/AppNavigator";
import { Product } from "../../types/Product";

interface HomeProps {
  navigation: AppNavigation;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[] | any[]>(DATA);
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        {products.length > 0 && (
          <FlatList
            numColumns={2}
            scrollEnabled={false}
            data={products}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <ListItem
                onItemPress={() => {
                  navigation.navigate("Single Product", { product: item });
                }}
                image={item.mainImageUrl}
                brand={item.brandName}
                name={item.name}
                price={item.price}
                key={item.productId}
              />
            )}
          />
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Home;
