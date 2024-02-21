import "./styles.css";

const C = 299792458;
const plane = 300;
const fastestSpacecraft = 163000;
const artemisSpeed = 10989;

const button = document.getElementById("submit");
const timeField = document.getElementById("time");
const relativeField = document.getElementById("relativeTime");
const text = document.getElementById("text");

function calcVelocity(time, relativeTime) {
  var velocity =
    C * Math.sqrt(1 - (time / relativeTime) * (time / relativeTime));
  var rounded = Math.round(velocity);
  var percent = Math.round((velocity / C) * 100);
  var planePercent = Number((velocity / plane).toPrecision(3));
  var fastestPercent = Number((velocity / fastestSpacecraft).toPrecision(3));
  var artemisPercent = Number((velocity / artemisSpeed).toPrecision(3));

  var year = Math.round(0.003747 * velocity + 1948);
  var yearString = "";

  if (year < 2024 || velocity <= fastestSpacecraft) {
    yearString = "This speed has already been achieved!";
  } else if (Math.round(velocity) >= C) {
    yearString = "It is impossible for a mass to move at this speed";
  } else {
    yearString = "This speed will be achieved by the year " + year;
  }

  text.innerHTML =
    "<br>The Speed you will need to go at is " +
    rounded +
    " m/s<br><br><br>This is " +
    percent +
    "% the Speed of Light,<br><br>" +
    planePercent +
    " times the speed of a commersion plane,<br><br>" +
    artemisPercent +
    " times the speed of a the Artemis I Rocket,<br><br>" +
    fastestPercent +
    " times the speed of the world's fastest spacecraft.<br><br><br>" +
    yearString;
  console.log(velocity / C);
}

button.addEventListener("click", function () {
  calcVelocity(
    timeField.value * 365 * 24 * 60 * 60,
    relativeField.value * 365 * 24 * 60 * 60
  );
});
