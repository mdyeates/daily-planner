/*  ---------- PSEUDO CODE -----------
  While/For Loop that loops starting at 9 and breaks at 5
    - For each loop generate or build html timeblock row
      • Append timeblock to container
        º Hour
          - A number corresponding with the hour in 12 hour format
        º Textarea
          - Show existing event text, if any and allow user to input event text
        º Save Button
          - When clicked, store/reset the event text corresponding with the hour to localStorage
      • Increase hour by one
      • Check if hour is past, current or future and apply corresponding css class to timeblock
*/
var timeBlockEl = $(".time-block");
var hourEl = $(".hour");
var descriptionEl = $(".description");

// Prints current day to jumbotron
function getCurrentDay() {
  var currentDayEl = $("#currentDay");
  var currentDay = moment().format("MMMM Do, YYYY");
  currentDayEl.text(currentDay);
}

function displayTimeblocks() {
  var container = $(".container");
  var startWork = moment(09, "HH");
  var endWork = moment(17, "HH");

  // Creates timeblock for each hour
  while (startWork.hour() <= endWork.hour()) {
    var timeblock = $(
      "<div class='time-block row pb-2'>" +
        "<div class='col d-flex'>" +
        "<div class='flex-fill d-flex align-items-center justify-content-center'>" +
        "<span class='hour text-uppercase fs-5'>" +
        startWork.format("h a") +
        "</span>" +
        "</div>" +
        "</div>" +
        "<div class='col-8 d-flex'>" +
        "<textarea class='description flex-fill p-3' name='' id='' cols='30' rows='10'>" +
        "</textarea>" +
        "</div>" +
        "<div class='col d-flex'>" +
        "<button class='saveBtn flex-fill'>" +
        "<i class='fa-solid fa-floppy-disk'>" +
        "</i>" +
        "</button>" +
        "</div>" +
        "</div>"
    );
    startWork.add(1, "hours");
    timeblock.appendTo(container);
    getSaveAlert();
  }
}

function getTimeblocks() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}
function saveTimeblocks() {
  localStorage.setItem("todos", JSON.stringify(arr));
}

function getSaveAlert() {
  // Save Alert timeout on button click
  var saveBtnEl = $(".saveBtn");
  var saveAlert = $("#saveAlert");
  saveBtnEl.click(function () {
    saveAlert.removeClass("hide");
    setTimeout(() => {
      saveAlert.addClass("hide");
    }, 3000);
  });
}

function init() {
  getCurrentDay();
  displayTimeblocks();
}

init();
