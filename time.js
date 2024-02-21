import "./styles.css";

const C = 299792458;
const plane = 300;
const fastestSpacecraft = 163000;
const artemisSpeed = 10989;

const button = document.getElementById("submit");
const timeField = document.getElementById("time");
const relativeField = document.getElementById("relativeTime");
const text = document.getElementById("text");

function calcRelativeTime(time, velocity) {
  var relTime = time / Math.sqrt(1 - (velocity * velocity) / (C * C));
  var rounded = Math.round(relTime / (365 * 24 * 60 * 60));
  var roundedTime = Math.round(time / (365 * 24 * 60 * 60));
  var percent = Math.round((velocity / C) * 100);
  var planePercent = Number((velocity / plane).toPrecision(3));
  var fastestPercent = Number((velocity / fastestSpacecraft).toPrecision(3));
  var artemisPercent = Number((velocity / artemisSpeed).toPrecision(3));

  var year = Math.round(0.003747 * velocity + 1948);
  var yearString = "";

  if (year < 2024 || velocity <= fastestSpacecraft) {
    yearString = "This speed has already been achieved!";
  } else if (velocity >= C) {
    yearString = "It is impossible for a mass to move at this speed";
  } else {
    yearString = "This speed will be achieved by the year " + year;
  }

  text.innerHTML =
    "<br>" +
    rounded +
    " years will have passed on Earth while you are away<br> This means that the age difference between you and everyone else on Earth will shift by " +
    (rounded - roundedTime) +
    " years<br><br><br>" +
    "This speed is " +
    percent +
    "% the Speed of Light,<br><br>" +
    planePercent +
    " times the speed of a commersion plane,<br><br>" +
    artemisPercent +
    " times the speed of a the Artemis I Rocket,<br><br>" +
    fastestPercent +
    " times the speed of the world's fastest spacecraft.<br><br><br>" +
    yearString; 
}

button.addEventListener("click", function () {
  calcRelativeTime(timeField.value * 365 * 24 * 60 * 60, relativeField.value);
});
