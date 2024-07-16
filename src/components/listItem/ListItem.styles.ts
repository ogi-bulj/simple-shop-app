import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 0.5,
    height: 275,
    justifyContent: "space-between",
    margin: 0.5,
    padding: "4%",
    width: "50%",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    resizeMode: "contain",
    width: "100%",
  },
  textContainer: {
    flexDirection: "column",
  },
  brandTitle: {
    color: "#000000",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 16,
  },
  title: {
    color: "#000000",
    fontFamily: "Poppins_300Light",
    fontSize: 14,
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceTitle: {
    color: "#000000",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  price: {
    color: "#c30010",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 16,
  },
});
