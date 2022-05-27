import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import Prayer from "./Prayer";
import { storeData } from "./Async";

export default function Jamats({ date }) {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);

  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);

  const submitData = function () {
    data = [
      { x: "Fajr", y: 0 },
      { x: "Zuhr", y: 0 },
      { x: "Asr", y: 0 },
      { x: "Maghrib", y: 0 },
      { x: "Esha", y: 0 },
    ];

    data[0].y = isEnabled1 ? 1 : 0;
    data[1].y = isEnabled2 ? 1 : 0;
    data[2].y = isEnabled3 ? 1 : 0;
    data[3].y = isEnabled4 ? 1 : 0;
    data[4].y = isEnabled5 ? 1 : 0;

    // storing the data
    storeData(date, data);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1.5 }}>
        {/* Prayer 1 container starts here */}

        <Prayer
          IMGname={require("../assets/1.png")}
          enabled={isEnabled1}
          toggleSwitch={toggleSwitch1}
        />

        {/* ends here */}

        {/* Prayer 2 container starts here */}
        <Prayer
          IMGname={require("../assets/2.png")}
          enabled={isEnabled2}
          toggleSwitch={toggleSwitch2}
        />

        {/* ends here */}

        {/* Prayer 3 container starts here */}
        <Prayer
          IMGname={require("../assets/3.png")}
          enabled={isEnabled3}
          toggleSwitch={toggleSwitch3}
        />

        {/* ends here */}

        {/* Prayer 4 container starts here */}
        <Prayer
          IMGname={require("../assets/4.png")}
          enabled={isEnabled4}
          toggleSwitch={toggleSwitch4}
        />

        {/* ends here */}

        {/* Prayer 5 container starts here */}
        <Prayer
          IMGname={require("../assets/5.png")}
          enabled={isEnabled5}
          toggleSwitch={toggleSwitch5}
        />

        {/* ends here */}
      </View>
      <View
        style={{
          flex: 1,
          height: 100,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Pressable style={styles.submitButton} onPress={() => submitData()}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#d6bae6",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "blue",
  },
  submitText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
