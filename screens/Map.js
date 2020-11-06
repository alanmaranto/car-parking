import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView from "react-native-maps";
import { parkings } from "../parkings";
import { mapStyles } from "../styles/styles";

const Map = () => {
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
          <Text>{parking.title}</Text>
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
