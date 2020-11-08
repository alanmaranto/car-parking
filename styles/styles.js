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
  buyContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primaryRed,
    paddingHorizontal: size.base * 1.5,
    paddingVertical: size.base,
    borderRadius: 6,
  },
  btnPay: {
    flexDirection: "row",
    backgroundColor: colors.primaryRed,
    padding: size.base * 1.5,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-between",
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
    justifyContent: "space-evenly",
    marginHorizontal: size.base * 1.5,
  },
  parkingIcon: {
    justifyContent: "space-between",
    // alignItems: "center",
    flexDirection: "row",
    // flex: 1,
  },
  buyTotal: {
    flex: 1,
    justifyContent: "center",
  },
  buyIcon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
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
    color: colors.primaryGrey,
  },
  headerLocation: {
    fontSize: size.font,
    fontWeight: "500",
    paddingVertical: size.base / 3,
  },
  modal: {
    backgroundColor: colors.white,
    flexDirection: "column",
    height: height * 0.75,
    padding: size.base * 2,
    borderTopLeftRadius: size.base,
    borderTopRightRadius: size.base,
  },
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalInfo: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    borderTopColor: colors.secondaryGrey,
    borderBottomColor: colors.secondaryGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: size.base
  },
  modalHours: {
    paddingVertical: height * 0.11,
  },
  payText: {
    color: colors.white,
    fontSize: size.base * 1.5,
    fontWeight: "600",
  },
});
