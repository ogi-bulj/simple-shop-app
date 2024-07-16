import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./ListItem.styles";
import { formatCurrency } from "../../utils/formatCurrency";

interface ListItemProps {
  onItemPress: () => any;
  image: string;
  brand: string;
  name: string;
  price: number;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  brand,
  name,
  price,
  onItemPress,
}) => {
  return (
    <Pressable onPress={onItemPress} style={styles.container}>
      <Image src={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.brandTitle}>
          {brand}
        </Text>
        <Text numberOfLines={1} style={styles.title}>
          {name}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>price:</Text>
        <Text style={styles.price}>{formatCurrency(price)}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
