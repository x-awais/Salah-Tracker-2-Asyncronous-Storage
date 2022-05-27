import CalendarPicker from "react-native-calendar-picker";
import { StyleSheet, View } from "react-native";

export default function React_Calendar({ setDate }) {
  return (
    <View style={styles.container}>
      <View>
        <CalendarPicker
          width={300}
          maxDate={new Date()}
          onDateChange={(date) => setDate(date.toDate().toDateString())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
