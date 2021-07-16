import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const LivingRoom = () => {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>Living Room</Text>
      <View style={styles.lightContainer}>
        <TouchableOpacity onPress={() => setLightsOn(!lightsOn)}>
          <View style={styles.lightButton}>
            <Text style={styles.lightText}>Turn {lightsOn ? "Off" : "On"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    margin: 15,
  },
  lightContainer: {
    margin: 40,
    alignItems: "center",
    textAlign: "center",
  },
  lightButton: {
    borderColor: "black",
    borderWidth: 1,
    padding: 30,
    width: 200,
  },
  lightText: {
    textAlign: "center",
  },
});

export default LivingRoom;
