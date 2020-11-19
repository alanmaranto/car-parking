import { StyleSheet, Dimensions } from "react-native";
import { colors, size } from "../theme";

const { height } = Dimensions.get("screen");

const modalStyles = StyleSheet.create({
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
    justifyContent: "space-between",
    borderTopColor: colors.secondaryGrey,
    borderBottomColor: colors.secondaryGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: size.base,
  },
  modalHours: {
    paddingTop: height * 0.11,
    paddingBottom: height * 0.15,
  },
  modalHoursDropdown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: size.base
  },
});

const payButtonStyles = StyleSheet.create({
  payBtn: {
    flexDirection: "row",
    backgroundColor: colors.primaryRed,
    padding: size.base * 1.5,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  payText: {
    color: colors.white,
    fontSize: size.base * 1.5,
    fontWeight: "600",
  },
});

module.exports = { modalStyles, payButtonStyles };
