
var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

function makeCalendar() {
  for (var i = 0; i <= 12; i++) {
    for (var j = 1; j <= MONTH_DAYS[i]; j++) {
     var dayOfTheWeek = getDayOfTheWeek(2021, i + 1, j);
     console.log(`The day is ${(i + 1)} 2021 ${j} ${dayOfTheWeek}`); 
    }
  }
}

function getDayOfTheWeek(year, month, day) {
 
  var lastTwo = year % 100;
  var howMany12 = Math.trunc(lastTwo / 12);
  var remainder = lastTwo % 12;
  var howMany4 = Math.trunc(remainder / 4);
  var dayOfMonth = day; 
  var monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
  var monthValue = (monthCode[month - 1]);
  var addUp = (howMany12 + remainder + howMany4 + dayOfMonth + monthValue);

  if (isLeapYear(year) && month == 1 || month == 2) {
    addUp = addUp - 1; // addUp -= 1
  }
    if (year >= 1600 && year <= 1699) {
      
      addUp += 6;
    }
  else if (year >= 1700 && year <= 1799) {

    addUp += 4;
  }
  else if (year >= 1800 && year <= 1899) {

    addUp += 2;
  }
  else if (year >= 2000 && year <= 2099) {

    addUp += 6;
  }
  else if (year >= 2100 && year <= 2199) {

    addUp += 4;
  }

  var addUpMod7 = addUp % 7;
  var dayCode = ["Saturday", "Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday"];

  const dayOfWeek = dayCode[addUpMod7];
  return dayOfWeek;

}

function isLeapYear(year) {

  if(year % 4 != 0) {
  return false; // normal year
} else if (year % 100 != 0) {
  return true;
} else if (year % 400 != 0) {
  return false; // normal
} else {
  return true;
}
}

console.log(getDayOfTheWeek(2020, 1, 2));
makeCalendar();

module.exports = { getDayOfTheWeek, makeCalendar }