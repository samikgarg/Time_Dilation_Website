import "./styles.css";

const C = 299792458;
const G = 6.67 * Math.pow(10, -11);
const plane = 300;
const fastestSpacecraft = 163000;
const massEarth = 5.972 * Math.pow(10, 24);
const radiusEarth = 6378100;

const button = document.getElementById("submit");
const massField = document.getElementById("time");
const radiusField = document.getElementById("relativeTime");
const text = document.getElementById("text");

function calcRelativeTime(mass, radius) {
  var relTime = 1 / Math.sqrt(1 - (2 * G * mass) / (radius * C * C));
  var rounded = 0;
  var timeString = "";

  if (relTime > 365 * 24 * 60 * 60) {
    rounded = Math.round(relTime / (365 * 24 * 60 * 60));
    timeString = "years";
  } else if (relTime > 24 * 60 * 60) {
    rounded = Math.round(relTime / (24 * 60 * 60));
    timeString = "days";
  } else if (relTime > 60 * 60) {
    rounded = Math.round(relTime / (60 * 60));
    timeString = "hours";
  } else if (relTime > 60) {
    rounded = Math.round(relTime / 60);
    timeString = "minutes";
  } else {
    rounded = Math.round(relTime);
    timeString = "seconds";
  }

  text.innerHTML =
    "<br> For every second you spend on this planet, " +
    rounded +
    " " +
    timeString +
    " will pass on Earth while you are away.";
}

button.addEventListener("click", function () {
  calcRelativeTime(
    massField.value * massEarth,
    radiusField.value * radiusEarth
  );
});
