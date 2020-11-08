import { StyleSheet, Dimensions } from "react-native";
import { colors, size } from "../theme";

const { width, height } = Dimensions.get("screen");

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    justifyContent: "center",
    paddingHorizontal: size.base * 2,
    paddingTop: size.base * 2.5,
    paddingBottom: size.base * 1.5,
    flexDirection: "row",
  },
  map: {
    flex: 3,
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 24,
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
  },
  hours: {
    flex: 1,
    flexDirection: "column",
  },
  hoursTitle: {
    fontSize: size.font,
  },
  parkingInfoContainer: {
    flex: 1.5,
    flexDirection: "row",
  },
  parkingInfo: {
    flex: 0.5,
    justifyContent: "center",
    marginHorizontal: size.base * 2,
  },
  parkingIcon: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  buyTotal: {
    flex: 1,
    justifyContent: "center",
  },
  buyIcon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buyTotalPrice: {
    fontSize: size.base * 2,
    color: colors.white,
  },
  markerPrice: {
    color: colors.secondaryRed,
    fontWeight: "bold",
  },
  markerStatus: {
    color: colors.secondaryGrey,
    paddingLeft: 4,
  },
  headerTitle: {
    color: colors.primaryGrey
  },
  headerLocation: {
    fontSize: size.font,
    fontWeight: "500",
    paddingVertical: size.base / 3
  }
});
