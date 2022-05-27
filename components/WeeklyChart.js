import { View } from "react-native";
import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
} from "victory-native";

import { getWeekly, getData } from "./Async";

const dummyData = [
  { x: "Fajr", y: 5 },
  { x: "Zuhr", y: 3 },
  { x: "Asr", y: 4 },
  { x: "Maghrib", y: 3 },
  { x: "Esha", y: 1 },
];

export default function WeeklyChart() {
  const [data, setData] = useState(null);
  // getting the weekly data
  getWeekly(setData);

  return (
    <View>
      <View>
        <VictoryChart domainPadding={10}>
          <VictoryBar
            colorScale={"#1BD5D4"}
            data={data != null ? data : dummyData}
          />
        </VictoryChart>
      </View>
    </View>
  );
}
