import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { VictoryPie } from "victory-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getCustom } from "./Async";

const dummyData = [
  { x: "Fajr", y: 35 },
  { x: "Zuhr", y: 40 },
  { x: "Asr", y: 55 },
  { x: "Maghrib", y: 55 },
  { x: "Esha", y: 55 },
];

export default function CustomChart() {
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState(null);

  // getting the data

  const getData = () => {
    getCustom(startDate, endDate, setData);
  };

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleStartDate = (date) => {
    setStartDate(date.toDateString() + "");
    hideDatePicker1();
  };

  const handleEndDate = (date) => {
    setEndDate(date.toDateString() + "");
    hideDatePicker2();
  };

  return (
    <ScrollView>
      <View style={styles.dateContainer}>
        <Button
          style={styles.dateButton}
          title="Start date"
          onPress={() => {
            showDatePicker1;
          }}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible1}
          mode="date"
          onConfirm={() => {
            handleStartDate;
          }}
          onCancel={() => {
            hideDatePicker1;
          }}
          maximumDate={new Date()}
        />
        <TextInput
          style={{
            width: 200,
            margin: 10,
            padding: 10,
          }}
        >
          {startDate}
        </TextInput>
      </View>
      <View style={styles.dateContainer}>
        <Button
          style={styles.dateButton}
          title="End Date"
          onPress={() => {
            showDatePicker2;
          }}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible2}
          mode="date"
          onConfirm={handleEndDate}
          onCancel={hideDatePicker2}
          maximumDate={new Date()}
        />
        <TextInput
          style={{
            width: 200,
            margin: 10,
            padding: 10,
          }}
        >
          {endDate}
        </TextInput>
      </View>
      <View style={styles.dateContainer}>
        <Button
          style={styles.dateButton}
          title="Submit"
          onPress={() => {
            getData();
          }}
        />
      </View>
      <View>
        <VictoryPie
          colorScale={["tomato", "gold", "cyan", "orange", "navy"]}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          data={data != null ? data : dummyData}
          height={300}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  dateButton: {
    width: 100,
  },
});
