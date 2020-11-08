import { StyleSheet, Dimensions } from "react-native";
import { colors, size } from "../theme";

const { width } = Dimensions.get("screen");

const headerStyles = StyleSheet.create({
  header: {
    justifyContent: "center",
    paddingHorizontal: size.base * 2,
    paddingTop: size.base * 2.5,
    paddingBottom: size.base * 1.5,
    flexDirection: "row",
  },
  headerTitle: {
    color: colors.primaryGrey,
  },
  headerLocation: {
    fontSize: size.font,
    fontWeight: "500",
    paddingVertical: size.base / 3,
  },
});

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    flex: 3,
  },
  marker: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: size.base * 2,
    paddingVertical: 12,
    paddingHorizontal: size.base * 2,
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
  markerPrice: {
    color: colors.secondaryRed,
    fontWeight: "bold",
  },
  markerStatus: {
    color: colors.secondaryGrey,
  },
});

const parkingFloatingStyles = StyleSheet.create({
  parkingsListContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: size.base * 2,
  },
  parking: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: size.base,
    marginHorizontal: size.base * 2,
    width: width - 24 * 2,
    flexDirection: "row",
  },
  parkingInfoContainer: {
    flex: 1.5,
    flexDirection: "row",
  },
  parkingInfo: {
    justifyContent: "space-evenly",
    marginHorizontal: size.base * 1.5,
  },
  parkingIcon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  hours: {
    flex: 1,
    flexDirection: "column",
    marginLeft: size.base / 2,
    justifyContent: "space-evenly",
  },
  hoursTitle: {
    fontSize: size.font,
    fontWeight: "500",
  },
});

const payButtonStyles = StyleSheet.create({
  payTotal: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  payIcon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  payTotalPrice: {
    fontSize: size.base * 2,
    color: colors.white,
    fontWeight: "600",
    paddingLeft: size.base / 4,
  },
  payContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primaryRed,
    paddingHorizontal: size.base * 1.5,
    paddingVertical: size.base,
    borderRadius: 6,
  },
});

module.exports = {
  mapStyles,
  parkingFloatingStyles,
  payButtonStyles,
  headerStyles,
};
