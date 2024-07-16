import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    rowGap: 30,
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 34,
    textTransform: "capitalize",
  },
  text: {
    color: "#000000",
    fontFamily: "Poppins_300Light",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
