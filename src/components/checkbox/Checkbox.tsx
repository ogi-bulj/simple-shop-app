import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./Checkbox.styles";

interface CheckboxProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, checked, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.box, checked && styles.checkedBox]} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Checkbox;
