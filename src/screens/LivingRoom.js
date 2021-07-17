import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

const LivingRoom = () => {
  const fetchLightsOff = async () => {
    Linking.openURL("http://192.168.161/16/off");
  };

  const fetchLightsOn = async () => {
    Linking.openURL("http://192.168.161/16/on");
    // const response = await fetch("http://192.168.161/16/on");
    // if (!response.ok) {
    //   throw new Error("Something went wrong");
    // }
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <View>
      <Text style={styles.heading}>Living Room</Text>
      <View style={styles.lightContainer}>
        <TouchableOpacity onPress={fetchLightsOn}>
          <View style={styles.lightButton}>
            <Text style={styles.lightText}>Turn On</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchLightsOff}>
          <View style={styles.lightButton}>
            <Text style={styles.lightText}>Turn Off</Text>
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
    marginBottom: 20,
    padding: 30,
    width: 200,
  },
  lightText: {
    textAlign: "center",
  },
});

export default LivingRoom;
