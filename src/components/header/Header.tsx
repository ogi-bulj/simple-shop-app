import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Header.styles";
import SearchIcon from "../../assets/svgs/SearchIcon";
import { useState } from "react";
import CloseIcon from "../../assets/svgs/CloseIcon";
import FilterIcon from "../../assets/svgs/FilterIcon";

const Header = () => {
  const [searchInput, setSearchInput] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {searchInput ? (
        <View style={styles.inputContainer}>
          <Pressable
            onPress={() => {
              setSearchInput(!searchInput);
            }}
            style={styles.closeButton}
          >
            <CloseIcon color="#000000" height={26} width={26} />
          </Pressable>
          <TextInput style={styles.input} placeholder="Search for brands..." />
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <Pressable
            onPress={() => {
              setSearchInput(!searchInput);
            }}
          >
            <SearchIcon color="#000000" height={26} width={26} />
          </Pressable>
          <Text style={styles.heading}>simple shop</Text>
          <FilterIcon color="#000000" height={26} width={26} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;
