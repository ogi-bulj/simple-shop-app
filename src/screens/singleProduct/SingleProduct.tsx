import {
  View,
  Text,
  Image,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { formatCurrency } from "../../utils/formatCurrency";
import { styles } from "./SingleProduct.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { useState } from "react";
import ChevronLeft from "../../assets/svgs/ChevronLeft";

type SingleProductRouteProp = RouteProp<RootStackParamList, "Single Product">;
interface SingleProductProps {
  route: SingleProductRouteProp;
  navigation: NativeStackNavigationProp<RootStackParamList, "Single Product">;
}

const SingleProduct: React.FC<SingleProductProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <Pressable
          style={[
            styles.closeContainer,
            { paddingTop: Platform.OS === "ios" ? "14%" : "8%" },
          ]}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft color="#000000" height={26} width={26} />
          <Text style={styles.closeText}>go back</Text>
        </Pressable>
        <FlatList
          maximumZoomScale={1.6}
          data={[product.mainImageUrl, ...product.additionalImages]}
          horizontal
          renderItem={({ item }) => (
            <Image
              resizeMode="cover"
              source={{ uri: item }}
              style={styles.image}
            />
          )}
          keyExtractor={(item, index) => `${index}-${item}`}
          contentContainerStyle={styles.carousel}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>{product.brandName}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatCurrency(product.price)}</Text>
            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>visit retailer</Text>
            </Pressable>
          </View>
          <Text style={styles.sectionTitle}>description</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.sectionTitle}>size</Text>
          <View style={styles.infoContainer}>
            {product.sizes.map((item) => (
              <Text key={item.id} style={styles.infoText}>
                {item.name}
              </Text>
            ))}
          </View>
          <Text style={styles.sectionTitle}>color</Text>
          <View style={styles.infoContainer}>
            {product.colors.map((item) => (
              <Text key={item} style={styles.infoText}>
                {item}
              </Text>
            ))}
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Pressable
              style={styles.closeContainer}
              onPress={() => setModalVisible(false)}
            >
              <ChevronLeft color="#000000" height={26} width={26} />
              <Text style={styles.closeText}>go back</Text>
            </Pressable>
            {loading && (
              <View style={{ justifyContent: "center", height: "100%" }}>
                <ActivityIndicator size={40} color="#000000" />
              </View>
            )}
            <WebView
              source={{ uri: product.deepLink }}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
          </SafeAreaView>
        </Modal>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default SingleProduct;
