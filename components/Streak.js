import { View, Text } from "react-native";
import React from "react";

export default function Streak({ counter }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "yellow",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{
            textAlign: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            width: 100,
            height: 50,
            fontSize: 25,
            color: "black",
            borderRadius: 20
          }}>{counter}0</Text>
        </View>
      </View>
    </View>
  );
}
