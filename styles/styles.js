import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";

const { width, height } = Dimensions.get("screen");

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 24,
    marginHorizontal: 12,
    width: width - 24 * 2,
    flexDirection: "row",
  },
  btnBuy: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primaryRed,
    padding: 12,
    borderRadius: 6,
  },
  marker: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.white,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: colors.primaryRed,
  }
});
