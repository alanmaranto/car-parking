import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { parkings } from "../parkings";
import { convertCoordinates } from "../helpers/map";
import { mapStyles } from "../styles/styles";

const Map = () => {
  const [hours, setHours] = useState(1);
  const [parkingData, setParkingData] = useState([]);
  const [active, setActive] = useState(null);

  const renderHeader = () => (
    <View style={mapStyles.header}>
      <Text>Header</Text>
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
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>
              x {parking.spots} {parking.title}
            </Text>
          </View>
          <View style={{ flex: 1.5, flexDirection: "row" }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                marginHorizontal: 24,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <Ionicons name="ios-pricetag" size={16} color="#7D818A" />
                <Text>${parking.price}</Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <Ionicons name="ios-star" size={16} color="#7D818A" />
                <Text>{parking.rating}</Text>
              </View>
            </View>
            <TouchableOpacity style={mapStyles.btnBuy}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 24, color: "white" }}>
                  ${parking.price * hours}
                </Text>
                <Text style={{ color: "white" }}>
                  {parking.price}x{hours} hrs
                </Text>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24, color: "white" }}>></Text>
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

  return (
    <View style={mapStyles.container}>
      {renderHeader()}
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        style={mapStyles.map}
      >
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
                <Text style={{ color: "#B40B15", fontWeight: "bold" }}>
                  ${parking.price}
                </Text>
                <Text style={{ color: "#7D818A", paddingLeft: 4 }}>
                  ({parking.free}/{parking.spots})
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Marker>
        ))}
      </MapView>
      {renderParkings()}
    </View>
  );
};

export default Map;
