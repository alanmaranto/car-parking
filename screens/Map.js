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
import Modal from "../components/Modal";
import { parkings } from "../parkings";
import { convertCoordinates } from "../helpers/map";
import {
  mapStyles,
  parkingFloatingStyles,
  payButtonStyles,
  headerStyles,
} from "../styles/map";
import { colors, size } from "../theme";

const Map = ({ currentPosition }) => {
  const [hours, setHours] = useState(1);
  const [parkingData, setParkingData] = useState([]);
  const [active, setActive] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const renderHeader = () => (
    <View style={headerStyles.header}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={headerStyles.headerTitle}>Detected location</Text>
        <Text style={headerStyles.headerLocation}>San Francisco, US</Text>
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
        <View style={[parkingFloatingStyles.parking, mapStyles.shadow]}>
          <View style={parkingFloatingStyles.hours}>
            <Text style={parkingFloatingStyles.hoursTitle}>
              x {parking.spots} {parking.title}
            </Text>
          </View>
          <View style={parkingFloatingStyles.parkingInfoContainer}>
            <View style={parkingFloatingStyles.parkingInfo}>
              <View style={parkingFloatingStyles.parkingIcon}>
                <Ionicons
                  name="ios-pricetag"
                  size={size.icon}
                  color={colors.primaryGrey}
                />
                <Text style={{ marginLeft: size.base }}>${parking.price}</Text>
              </View>
              <View style={parkingFloatingStyles.parkingIcon}>
                <Ionicons
                  name="ios-star"
                  size={size.icon}
                  color={colors.primaryGrey}
                />
                <Text style={{ marginLeft: size.base }}>{parking.rating}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={payButtonStyles.payContainer}
              onPress={() => setActiveModal(parking)}
            >
              <View style={payButtonStyles.payTotal}>
                <Text style={payButtonStyles.payTotalPrice}>
                  ${parking.price * hours}
                </Text>
                <Text style={{ color: colors.white }}>
                  {parking.price}x{hours} hrs
                </Text>
              </View>
              <View style={payButtonStyles.payIcon}>
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
      style={parkingFloatingStyles.parkingsListContainer}
      horizontal
      renderItem={({ item }) => renderParking(item)}
      keyExtractor={(item, index) => `${item.id}`}
      data={parkings}
    />
  );

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
      <Modal
        hours={hours}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
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
