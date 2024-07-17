import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../assets/svgs/SearchIcon";
import CloseIcon from "../../assets/svgs/CloseIcon";
import FilterIcon from "../../assets/svgs/FilterIcon";
import Checkbox from "../checkbox/Checkbox";
import { styles } from "./Header.styles";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
  setGenderFilter: (gender: string[]) => void;
  setColorFilter: (color: string[]) => void;
}

const Header: React.FC<HeaderProps> = ({
  setSearchQuery,
  setGenderFilter,
  setColorFilter,
}) => {
  const [searchInput, setSearchInput] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const toggleGender = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const applyFilters = () => {
    setGenderFilter(selectedGenders);
    setColorFilter(selectedColors);
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {searchInput ? (
        <View style={styles.inputContainer}>
          <Pressable
            onPress={() => {
              setSearchInput(!searchInput);
              setSearchQuery("");
            }}
            style={styles.closeButton}
          >
            <CloseIcon color="#000000" height={26} width={26} />
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Search for brands..."
            onChangeText={(text) => setSearchQuery(text)}
          />
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
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <FilterIcon color="#000000" height={26} width={26} />
          </Pressable>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.leftModalColumn}>
              <Text style={styles.modalTitle}>Color</Text>
              <Checkbox
                title="Black"
                checked={selectedColors.includes("schwarz")}
                onPress={() => toggleColor("schwarz")}
              />
              <Checkbox
                title="Blue"
                checked={selectedColors.includes("blau" || "blue")}
                onPress={() => toggleColor("blau" || "blue")}
              />
              <Checkbox
                title="Brown"
                checked={selectedColors.includes("braun")}
                onPress={() => toggleColor("braun")}
              />
              <Checkbox
                title="Denim"
                checked={selectedColors.includes("denim")}
                onPress={() => toggleColor("denim")}
              />
              <Checkbox
                title="Gray"
                checked={selectedColors.includes("grau")}
                onPress={() => toggleColor("grau")}
              />
              <Checkbox
                title="Green"
                checked={selectedColors.includes("grün")}
                onPress={() => toggleColor("grün")}
              />
              <Checkbox
                title="Nude"
                checked={selectedColors.includes("nude")}
                onPress={() => toggleColor("nude")}
              />
              <Checkbox
                title="Orange"
                checked={selectedColors.includes("orange")}
                onPress={() => toggleColor("orange")}
              />
              <Checkbox
                title="Pink"
                checked={selectedColors.includes("rosa" || "pink")}
                onPress={() => toggleColor("rosa" || "pink")}
              />
              <Checkbox
                title="Red"
                checked={selectedColors.includes("rot")}
                onPress={() => toggleColor("rot")}
              />
              <Checkbox
                title="White"
                checked={selectedColors.includes("weiß" || "weiss")}
                onPress={() => toggleColor("weiß" || "weiss")}
              />
            </View>
            <View style={styles.rightModalColumn}>
              <Text style={styles.modalTitle}>Gender</Text>
              <Checkbox
                title="Male"
                checked={selectedGenders.includes("male")}
                onPress={() => toggleGender("male")}
              />
              <Checkbox
                title="Female"
                checked={selectedGenders.includes("female")}
                onPress={() => toggleGender("female")}
              />
            </View>
          </View>
          <View style={styles.modalButtons}>
            <Pressable onPress={applyFilters} style={styles.button}>
              <Text style={styles.buttonText}>apply</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Header;
