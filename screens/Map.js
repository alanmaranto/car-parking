import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { parkings } from "../parkings";
import { convertCoordinates } from "../helpers/map";
import { mapStyles } from "../styles/styles";
import { colors, size } from "../theme";

const Map = ({ currentPosition }) => {
  const [hours, setHours] = useState(1);
  const [parkingData, setParkingData] = useState([]);
  const [active, setActive] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const renderHeader = () => (
    <View style={mapStyles.header}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={mapStyles.headerTitle}>Detected location</Text>
        <Text style={mapStyles.headerLocation}>San Francisco, US</Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <TouchableWithoutFeedback>
          <Ionicons name="ios-menu" size={size.icon * 1.5} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  useEffect(() => {
    const getParkingData = async () => {
      const data = await convertCoordinates(parkings);
      setParkingData(data);
    };

    getParkingData();
  }, []);

  const renderParking = (parking) => {
    return (
      <TouchableWithoutFeedback
        key={`parking-${parking.id}}`}
        onPress={() => setActive(parking.id)}
      >
        <View style={[mapStyles.parking, mapStyles.shadow]}>
          <View style={mapStyles.hours}>
            <Text style={mapStyles.hoursTitle}>
              x {parking.spots} {parking.title}
            </Text>
          </View>
          <View style={mapStyles.parkingInfoContainer}>
            <View style={mapStyles.parkingInfo}>
              <View style={mapStyles.parkingIcon}>
                <Ionicons
                  name="ios-pricetag"
                  size={size.icon}
                  color={colors.primaryGrey}
                />
                <Text>${parking.price}</Text>
              </View>
              <View style={mapStyles.parkingIcon}>
                <Ionicons
                  name="ios-star"
                  size={size.icon}
                  color={colors.primaryGrey}
                />
                <Text>{parking.rating}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={mapStyles.btnBuy}
              onPress={() => setActiveModal(parking)}
            >
              <View style={mapStyles.buyTotal}>
                <Text style={mapStyles.buyTotalPrice}>
                  ${parking.price * hours}
                </Text>
                <Text style={{ color: colors.white }}>
                  {parking.price}x{hours} hrs
                </Text>
              </View>
              <View style={mapStyles.buyIcon}>
                <FontAwesome
                  name="angle-right"
                  size={size.icon * 1.75}
                  color={colors.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderParkings = () => (
    <FlatList
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      style={mapStyles.parkings}
      horizontal
      renderItem={({ item }) => renderParking(item)}
      keyExtractor={(item, index) => `${item.id}`}
      data={parkings}
    />
  );

  const renderModal = () => {
    if (!activeModal) return null;
    return (
      <Modal
        isVisible
        useNativeDriver
        onBackButtonPress={() => setActiveModal(null)}
        onBackdropPress={() => setActiveModal(null)}
        onSwipeComplete={() => setActiveModal(null)}
        style={mapStyles.modalContainer}
      >
        <View style={mapStyles.modal}>
          <View>
            <Text>{activeModal.title}</Text>
          </View>
          <View>
            <Text>{activeModal.description}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>{activeModal.price}</Text>
            <Text>{activeModal.rating}</Text>
            <Text>{activeModal.distance}</Text>
            <Text>
              {activeModal.free}/{activeModal.total}
            </Text>
          </View>
          <View style={mapStyles.modalHours}>
            <Text style={{ textAlign: "center", fontWeight: "500" }}>
              Choose your Booking Period:
            </Text>
          </View>
          <View>
            <TouchableOpacity style={mapStyles.btnPay}>
              <Text style={mapStyles.payText}>
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

  return (
    <View style={mapStyles.container}>
      {renderHeader()}
      <MapView initialRegion={currentPosition} style={mapStyles.map}>
        {parkingData.map((parking) => (
          <Marker key={`marker-${parking.id}`} coordinate={parking.coordinate}>
            <TouchableWithoutFeedback
              key={`parking-${parking.id}}`}
              onPress={() => setActive(parking.id)}
            >
              <View
                style={[
                  mapStyles.marker,
                  mapStyles.shadow,
                  active === parking.id ? mapStyles.active : null,
                ]}
              >
                <Text style={mapStyles.markerPrice}>${parking.price}</Text>
                <Text style={mapStyles.markerStatus}>
                  ({parking.free}/{parking.spots})
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Marker>
        ))}
      </MapView>
      {renderParkings()}
      {renderModal()}
    </View>
  );
};

Map.defaultProps = {
  currentPosition: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  },
};

export default Map;
