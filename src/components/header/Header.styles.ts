import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.2)",
    height: Platform.OS === "ios" ? 110 : 75,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    height: 50,
  },
  heading: {
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
  inputContainer: {
    justifyContent: "center",
    paddingHorizontal: "5%",
    height: 50,
  },
  input: {
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 16,
    borderWidth: 0.5,
    height: 40,
    paddingLeft: 38,
    paddingRight: 20,
    paddingVertical: 0,
  },
  closeButton: {
    left: "8%",
    position: "absolute",
    zIndex: 20,
  },
  modal: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
  },
  modalTitle: {
    color: "#ffffff",
    fontFamily: "BaiJamjuree_700Bold",
    fontSize: 24,
    marginBottom: 10,
  },
  modalContainer: {
    columnGap: 26,
    flexDirection: "row",
  },
  leftModalColumn: {
    flexDirection: "column",
    rowGap: 6,
  },
  rightModalColumn: {
    flexDirection: "column",
    rowGap: 6,
  },
  modalButtons: {
    columnGap: 26,
    flexDirection: "row",
    marginTop: 26,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    color: "#000000",
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
