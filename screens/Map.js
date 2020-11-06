import React, { useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import MapView from "react-native-maps";
import { parkings } from "../parkings";
import { mapStyles } from "../styles/styles";

const Map = () => {
  const [hours, setHours] = useState(1);
  const renderHeader = () => (
    <View style={mapStyles.header}>
      <Text>Header</Text>
    </View>
  );

  const renderParkings = () => (
    <ScrollView
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      onScroll={(props) => console.log("hey", props)}
      style={mapStyles.parkings}
      horizontal
    >
      {parkings.map((parking) => (
        <View key={`parking-${parking.id}}`} style={mapStyles.parking}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>
              x {parking.spots} {parking.title}
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 6,
                padding: 4,
                width: 100
              }}
            >
              <Text style={{ fontSize: 16 }}>05:00 hrs</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text>${parking.price}</Text>
              <Text>{parking.rating}</Text>
            </View>
            <TouchableWithoutFeedback>
              <View style={mapStyles.btnBuy}>
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
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={mapStyles.container}>
      {renderHeader()}
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={mapStyles.map}
      />
      {renderParkings()}
    </View>
  );
};

export default Map;
