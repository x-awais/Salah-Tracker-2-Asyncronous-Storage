import { View, ScrollView, Button } from "react-native";

import React, { useState } from "react";
import React_Calendar from "./React_Calender";
import Jamats from "./Jamats";

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState("");

  return (
    <ScrollView>
      <React_Calendar setDate={setDate} />
      <Jamats date={date} />
      <View>
        <Button
          title="Display Charts"
          onPress={() => navigation.navigate("Charts")}
        />
      </View>
    </ScrollView>
  );
}
