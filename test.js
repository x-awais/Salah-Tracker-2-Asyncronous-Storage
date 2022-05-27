function getAllDaysInMonth(year, month) {
  const date = new Date(year, month, 1);

  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date).toDateString());
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

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
var data = {};

for (var i = 0; i < 4; i++) {
  arr.push(getAllDaysInMonth(currentYear, currentMonth));
  data[monthNames[currentMonth]] = {};
  currentMonth -= 1;
}

// console.log(arr);
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

var daylist = getDaysCustom(
  new Date("Wed Mar 02 2022"),
  new Date("Fri Mar 18 2022")
);

console.log(daylist);

// Object {
//   "April": Array [
//     Object {
//       "x": "Fajr",
//       "y": 5,
//     },
//     Object {
//       "x": "Zuhr",
//       "y": 3,
//     },
//     Object {
//       "x": "Asr",
//       "y": 1,
//     },
//     Object {
//       "x": "Maghrib",
//       "y": 1,
//     },
//     Object {
//       "x": "Esha",
//       "y": 1,
//     },
//   ],
//   "February": Array [
//     Object {
//       "x": "Fajr",
//       "y": 5,
//     },
//     Object {
//       "x": "Zuhr",
//       "y": 3,
//     },
//     Object {
//       "x": "Asr",
//       "y": 1,
//     },
//     Object {
//       "x": "Maghrib",
//       "y": 1,
//     },
//     Object {
//       "x": "Esha",
//       "y": 1,
//     },
//   ],
//   "March": Array [
//     Object {
//       "x": "Fajr",
//       "y": 5,
//     },
//     Object {
//       "x": "Zuhr",
//       "y": 3,
//     },
//     Object {
//       "x": "Asr",
//       "y": 1,
//     },
//     Object {
//       "x": "Maghrib",
//       "y": 1,
//     },
//     Object {
//       "x": "Esha",
//       "y": 1,
//     },
//   ],
//   "May": Array [
//     Object {
//       "x": "Fajr",
//       "y": 5,
//     },
//     Object {
//       "x": "Zuhr",
//       "y": 3,
//     },
//     Object {
//       "x": "Asr",
//       "y": 1,
//     },
//     Object {
//       "x": "Maghrib",
//       "y": 1,
//     },
//     Object {
//       "x": "Esha",
//       "y": 1,
//     },
//   ],
// }
