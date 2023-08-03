// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = ""; //placeholder string for date
var currentDayString = "" //placeholder for todays date display
var currentHour = 9; //default to first working hour
var timeEntries = [];

const timeEntriesName = "workDaySchedulerList"; //local stroage name
const firstEntry = 9; //9am
const lastEntry = 17; //5pm
const workingHours = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM",
  "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

setCurrentDateAndHour(); // Set current date/datestring/hour and display in header
buildTimeBlocks(); // Build rest of html for page
getTimeEntries(); // See if there are entries in localstorage and load them

function setCurrentDateAndHour () {
  var today = new Date();
  var day = today.getDate();
  var dayEnd = "th";
  currentHour = today.getHours();

  // display dates <10 with a 0 e.g 03

  if (day < 10) {
    currentDate = today.getFullYear() + months[today.getMonth()] + "0" + day;
  }
    else {
      currentDate = today.getFullYear() + months[today.getMonth()] + day;
    }
  


  // Add correct day suffix
  if ((day === 1) || (day === 21) || (day === 31)) {
    dayEnd = "st";
  }
  else if ((day === 2) || (day === 22)) {
    dayEnd = "nd";
  }
  else if ((day === 3) || (day === 23)) {
    dayEnd = "rd";

    currentDateString = days[today.getDay()] + ", " + months[today.getMonth()] + " " +
      day + dayEnd + ", " + today.getFullYear(); // date string to display in header
    $("#currentDay").text(currentDateString); // set header date
  }

}
