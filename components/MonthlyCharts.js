import { View, Button } from "react-native";
import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryLabel,
  VictoryPortal,
} from "victory-native";
import { getMonthly } from "./Async";

export default function MonthlyCharts() {
  const [data, setData] = useState(null);

  // getting the data
  getMonthly(setData);

  if (data != null) {
    return (
      <View>
        <VictoryChart domainPadding={40}>
          <VictoryStack
            colorScale={["#1BD5D4", "#AF4BCF", "#E97369", "#1DE4BD", "#E7E34E"]}
            style={{
              data: { width: 50 },
              labels: { padding: -10, fontSize: 10 },
            }}
            labelComponent={
              <VictoryPortal>
                <VictoryLabel />
              </VictoryPortal>
            }
          >
            <VictoryBar
              data={[
                {
                  x: data[3][0],
                  y: data[3][1],
                  label: "Fajr",
                },
                {
                  x: data[2][0],
                  y: data[2][1],
                  label: "Fajr",
                },
                {
                  x: data[1][0],
                  y: data[1][1],
                  label: "Fajr",
                },
                {
                  x: data[0][0],
                  y: data[0][1],
                  label: "Fajr",
                },
              ]}
            />
            <VictoryBar
              data={[
                {
                  x: data[3][0],
                  y: data[3][2],
                  label: "Zuhr",
                },
                {
                  x: data[2][0],
                  y: data[2][2],
                  label: "Zuhr",
                },
                {
                  x: data[1][0],
                  y: data[1][2],
                  label: "Zuhr",
                },
                {
                  x: data[0][0],
                  y: data[0][2],
                  label: "Zuhr",
                },
              ]}
            />
            <VictoryBar
              data={[
                {
                  x: data[3][0],
                  y: data[3][3],
                  label: "Asar",
                },
                {
                  x: data[2][0],
                  y: data[2][3],
                  label: "Asar",
                },
                {
                  x: data[1][0],
                  y: data[1][3],
                  label: "Asar",
                },
                {
                  x: data[0][0],
                  y: data[0][3],
                  label: "Asar",
                },
              ]}
            />
            <VictoryBar
              data={[
                {
                  x: data[3][0],
                  y: data[3][4],
                  label: "Maghrib",
                },
                {
                  x: data[2][0],
                  y: data[2][4],
                  label: "Maghrib",
                },
                {
                  x: data[1][0],
                  y: data[1][4],
                  label: "Maghrib",
                },
                {
                  x: data[0][0],
                  y: data[0][4],
                  label: "Maghrib",
                },
              ]}
            />
            <VictoryBar
              data={[
                {
                  x: data[3][0],
                  y: data[3][5],
                  label: "Esha",
                },
                {
                  x: data[2][0],
                  y: data[2][5],
                  label: "Esha",
                },
                {
                  x: data[1][0],
                  y: data[1][5],
                  label: "Esha",
                },
                {
                  x: data[0][0],
                  y: data[0][5],
                  label: "Esha",
                },
              ]}
            />
          </VictoryStack>
        </VictoryChart>
      </View>
    );
  }
  return (
    <View>
      <VictoryChart>
        <VictoryStack
          colorScale={["#1BD5D4", "#AF4BCF", "#E97369", "#1DE4BD", "#E7E34E"]}
          labelComponent={
            <VictoryPortal>
              <VictoryLabel />
            </VictoryPortal>
          }
        >
          <VictoryBar
            data={[
              { x: 1, y: 3, label: "C" },
              { x: 2, y: 4, label: "C" },
              { x: 3, y: 2, label: "C" },
            ]}
          />
          <VictoryBar
            data={[
              { x: 1, y: 3, label: "B" },
              { x: 2, y: 4, label: "B" },
              { x: 3, y: 2, label: "B" },
            ]}
          />
          <VictoryBar
            data={[
              { x: 1, y: 3, label: "A" },
              { x: 2, y: 4, label: "A" },
              { x: 3, y: 2, label: "A" },
            ]}
          />
        </VictoryStack>
      </VictoryChart>
    </View>
  );
}
