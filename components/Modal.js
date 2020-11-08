import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {
  modalStyles,
  parkingFloatingStyles,
  payButtonModalStyles,
} from "../styles";
import { colors, size } from "../theme";

const ModalScreen = ({ hours, activeModal, setActiveModal }) => {
  if (!activeModal) return null;
  return (
    <Modal
      isVisible
      useNativeDriver
      onBackButtonPress={() => setActiveModal(null)}
      onBackdropPress={() => setActiveModal(null)}
      onSwipeComplete={() => setActiveModal(null)}
      style={modalStyles.modalContainer}
    >
      <View style={modalStyles.modal}>
        <View>
          <Text style={{ fontSize: size.font * 1.5 }}>{activeModal.title}</Text>
        </View>
        <View style={{ paddingVertical: size.base }}>
          <Text
            style={{ fontSize: size.font * 1.1, color: colors.primaryGrey }}
          >
            {activeModal.description}
          </Text>
        </View>
        <View style={modalStyles.modalInfo}>
          <View
            style={[
              parkingFloatingStyles.parkingIcon,
              { justifyContent: "flex-start" },
            ]}
          >
            <Ionicons
              name="ios-pricetag"
              size={size.icon * 1.1}
              color={colors.primaryGrey}
            />
            <Text style={{ fontSize: size.icon * 1.15 }}>
                {" "}
              ${activeModal.price}
            </Text>
          </View>
          <View
            style={[
              parkingFloatingStyles.parkingIcon,
              { justifyContent: "flex-start" },
            ]}
          >
            <Ionicons
              name="ios-star"
              size={size.icon * 1.1}
              color={colors.primaryGrey}
            />
            <Text style={{ fontSize: size.icon * 1.15}}>
                {" "}
              {activeModal.rating}
            </Text>
          </View>
          <View
            style={[
              parkingFloatingStyles.parkingIcon,
              { justifyContent: "flex-start" },
            ]}
          >
            <Ionicons
              name="ios-pin"
              size={size.icon * 1.1}
              color={colors.primaryGrey}
            />
            <Text style={{ fontSize: size.icon * 1.15}}>
                {" "}
              {activeModal.distance}km
            </Text>
          </View>
          <View
            style={[
              parkingFloatingStyles.parkingIcon,
              { justifyContent: "flex-start" },
            ]}
          >
            <Ionicons
              name="ios-car"
              size={size.icon * 1.1}
              color={colors.primaryGrey}
            />
            <Text style={{ fontSize: size.icon * 1.15}}>
                {" "}
              {activeModal.free}/{activeModal.spots}
            </Text>
          </View>
        </View>
        <View style={modalStyles.modalHours}>
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            Choose your Booking Period:
          </Text>
        </View>
        <View>
          <TouchableOpacity style={payButtonModalStyles.payBtn}>
            <Text style={payButtonModalStyles.payText}>
              Proceed to pay ${activeModal.price * hours * activeModal.id}
            </Text>
            <FontAwesome
              name="angle-right"
              size={size.icon * 1.75}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;
