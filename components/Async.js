import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (date, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(date, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(
      "Fri May 06 2022 12:00:00 GMT-0400"
    );
    console.log(JSON.parse(jsonValue));
  } catch (e) {}
};

export const getWeekly = async (setData) => {
  try {
    const data = [
      { x: "Fajr", y: 0 },
      { x: "Zuhr", y: 0 },
      { x: "Asr", y: 0 },
      { x: "Maghrib", y: 0 },
      { x: "Esha", y: 0 },
    ];
    const currentDate = new Date();
    const week = [];
    // getting 7 days before dates in an array
    for (var i = 6; i >= 0; i--) {
      var date = new Date();
      date.setDate(currentDate.getDate() - i);
      week.push(date.toDateString());
    }
    // getting the 7 days data in an array
    for (var i = 0; i < 7; i++) {
      const jsonValue = await AsyncStorage.getItem(week[i]);
      if (jsonValue != null) {
        const parseValue = JSON.parse(jsonValue);
        data[0].y += parseValue[0].y;
        data[1].y += parseValue[1].y;
        data[2].y += parseValue[2].y;
        data[3].y += parseValue[3].y;
        data[4].y += parseValue[4].y;
      }
    }

    // storing updated data object to array
    setData(data);
    // console.log(data);
  } catch (e) {
    // error reading value
  }
};

function getAllDaysInMonth(year, month) {
  const date = new Date(year, month, 1);

  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date).toDateString());
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export const getMonthly = async (setData) => {
  try {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const currentYear = date.getFullYear();
    var currentMonth = date.getMonth(); // 👈️ months are 0-based
    var arr = [];
    var data = [];
    var keys = [];

    for (var i = 0; i < 4; i++) {
      arr.push(getAllDaysInMonth(currentYear, currentMonth));
      keys.push(monthNames[currentMonth]);
      currentMonth -= 1;
    }

    for (var i = 0; i < keys.length; i++) {
      var singleRecord = ["", 0, 0, 0, 0, 0];
      for (var j = 0; j < arr[i].length; j++) {
        const jsonValue = await AsyncStorage.getItem(arr[i][j]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          singleRecord[1] += parseValue[0].y;
          singleRecord[2] += parseValue[1].y;
          singleRecord[3] += parseValue[2].y;
          singleRecord[4] += parseValue[3].y;
          singleRecord[5] += parseValue[4].y;
        }
      }
      singleRecord[0] = keys[i];
      data.push(singleRecord);
    }
    // console.log(data);
    setData(data);
  } catch (e) {
    // error reading value
  }
};

var getDaysCustom = function (start, end) {
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt).toDateString());
  }
  return arr;
};

export const getCustom = async (startDate, endDate, setData) => {
  try {
    const daylist = getDaysCustom(new Date(startDate), new Date(endDate));
    console.log(startDate);
    const data = [
      { x: "Fajr", y: 0 },
      { x: "Zuhr", y: 0 },
      { x: "Asr", y: 0 },
      { x: "Maghrib", y: 0 },
      { x: "Esha", y: 0 },
    ];

    for (var i = 0; i < daylist.length; i++) {
      const jsonValue = await AsyncStorage.getItem(daylist[i]);
      console.log(daylist[i]);
      if (jsonValue != null) {
        const parseValue = JSON.parse(jsonValue);
        data[0].y += parseValue[0].y;
        data[1].y += parseValue[1].y;
        data[2].y += parseValue[2].y;
        data[3].y += parseValue[3].y;
        data[4].y += parseValue[4].y;
      }
    }

    // storing updated data object to array
    // console.log(data);
    setData(data);
  } catch (e) {
    // error reading value
  }
};
