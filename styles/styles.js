import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
  },
  map: {
    flex: 3,
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 24
  },
  parking: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    padding: 24,
    marginHorizontal: 12,
    width: width - 24 * 2,
    flexDirection: "row",
  },
  btnBuy: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#B40B15",
    padding: 12,
    borderRadius: 6,
  },
  marker: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
