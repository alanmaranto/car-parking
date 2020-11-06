import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { mapStyles } from "../styles/styles";

const Map = () => {
  const renderHeader = () => (
    <View style={mapStyles.header}>
      <Text>Header</Text>
    </View>
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
    </View>
  );
};

export default Map;
