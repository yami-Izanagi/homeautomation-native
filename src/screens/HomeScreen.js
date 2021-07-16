import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Living");
          }}>
          <View style={styles.menuButtons}>
            <Text style={styles.menuText}>Living Room</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Kitchen");
          }}>
          <View style={styles.menuButtons}>
            <Text style={styles.menuText}>Kitchen</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
    margin: 30,
  },
  menuContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  menuButtons: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  menuText: {
    textAlign: "center",
  },
});

export default HomeScreen;
