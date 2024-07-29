import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";

import { useState } from "react";

import { appLogo } from "../assets/images";

export default function Hero() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };
  const websiteURL = (webLink) => {
    Linking.openURL(webLink);
  };
  return (
    <ScrollView style={styles.heroContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>Web</Text>
        </View>

        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>AI</Text>
        </View>

        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>Tech</Text>
        </View>

        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>UI/UX</Text>
        </View>

        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>Web 3.0</Text>
        </View>
      </ScrollView>

      {/* CENTER CONTAINER */}
      <View style={styles.centerContainer}>
        <Text style={[styles.welcomeText]}>
          Welcome to <Text style={{ color: "#53E0BC" }}>Company</Text> Name
        </Text>

        <Image source={appLogo} style={styles.heroImage} />

        <TouchableOpacity
          onPress={() => websiteURL("https://www.google.com")}
          style={styles.btnStyles}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* INPUT CONTAINER */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.heroInput}
          placeholder="Type something here..."
          value={inputText}
          onChangeText={handleInputChange}
        />

        <Text style={{ textAlign: "center" }}>{String(inputText)}</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.boxItem]}>
          <Text>Box one</Text>
        </View>
        <View>
          <Text>Box two</Text>
        </View>
        <View>
          <Text>Box three</Text>
        </View>
        <View>
          <Text>Box fourth</Text>
        </View>
        <View>
          <Text>Box five</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    paddingHorizontal: 12,
  },
  scrollView: {
    marginVertical: 10,
  },

  tabContainer: {
    height: 30,
    width: 100,
    backgroundColor: "#53E0BC",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginRight: 8,
    shadowRadius: 14,
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
  },
  centerContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: "center",
  },
  heroImage: {
    width: 400,
    height: 400,
  },
  btnStyles: {
    backgroundColor: "#53E0BC",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    elevation: 5,
    shadowRadius: 14,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  heroInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
    width: "100%",
  },
  inputContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  boxContainer: {
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
  box: {
    height: 40,
    width: 100,
    backgroundColor: "#53E0BC",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
});
