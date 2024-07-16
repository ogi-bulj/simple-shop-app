import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 500,
    width: width,
    resizeMode: "contain",
  },
  detailsContainer: {
    borderColor: "rgba(0,0,0,0.2)",
    borderTopWidth: 0.5,
    paddingHorizontal: "5%",
    paddingVertical: 16,
    marginTop: 0,
  },
  brand: {
    color: "#000000",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 26,
  },
  name: {
    color: "#000000",
    fontFamily: "Poppins_300Light",
    fontSize: 18,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
  },
  price: {
    color: "#c30010",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 24,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 26,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    textTransform: "uppercase",
  },
  sectionTitle: {
    color: "#000000",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 16,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  description: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    marginBottom: 16,
  },
  infoContainer: {
    columnGap: 20,
    flexDirection: "row",
    marginBottom: 16,
  },
  infoText: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    textTransform: "capitalize",
  },
  closeContainer: {
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    columnGap: 2,
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 10,
  },
  closeText: {
    fontFamily: "Poppins_300Light",
    fontSize: 17,
    textTransform: "capitalize",
  },
});
