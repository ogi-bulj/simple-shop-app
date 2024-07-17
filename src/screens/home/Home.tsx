import { FlatList, ScrollView } from "react-native";
import { styles } from "./Home.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListItem from "../../components/listItem/ListItem";
import { useState, useEffect } from "react";
import DATA from "../../__mocks__/products.json";
import { AppNavigation } from "../../navigation/AppNavigator";
import { Product } from "../../types/Product";

interface HomeProps {
  navigation: AppNavigation;
  searchQuery: string;
  genderFilter: string[];
  colorFilter: string[];
}

const Home: React.FC<HomeProps> = ({
  navigation,
  searchQuery,
  genderFilter,
  colorFilter,
}) => {
  const [products, setProducts] = useState<Product[] | any[]>(DATA);
  useEffect(() => {
    const filteredProducts = DATA.filter((product) => {
      const matchesSearchQuery =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brandName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenderFilter =
        genderFilter.length === 0 ||
        genderFilter.some((gender) => product.genders.includes(gender));
      const matchesColorFilter =
        colorFilter.length === 0 ||
        colorFilter.some((color) => product.colors.includes(color));
      return matchesSearchQuery && matchesGenderFilter && matchesColorFilter;
    });
    setProducts(filteredProducts);
  }, [searchQuery, genderFilter, colorFilter]);
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
