// || Print todays date
getCurrentDay = () => {
  var currentDayEl = $("#currentDay");
  var currentDay = moment(new Date()).format("MMMM Do, YYYY");
  currentDayEl.text(currentDay);
};

// || Print todays time
getCurrentTime = () => {
  var currentTimeEl = $("#currentTime");
  var currentTime = moment().format("h:mm a");
  currentTimeEl.text(currentTime);
};

// || Create timeblocks with hours
displayTimeblocks = () => {
  var containerEl = $(".container");
  var startWork = moment(09, "HH");
  var endWork = moment(17, "HH");

  while (startWork.hour() <= endWork.hour()) {
    var timeblockHour = startWork.format("h a");
    var timeblock = $(
      "<div class='time-block row pb-1'>" +
        "<div class='col d-flex'>" +
        "<div class='flex-fill d-flex align-items-center justify-content-center'>" +
        "<span class='hour text-uppercase'>" +
        timeblockHour +
        "</span>" +
        "</div>" +
        "</div>" +
        "<div class='col-9 d-flex'>" +
        "<textarea class='description flex-fill p-2 cols='30' rows='10'>" +
        "</textarea>" +
        "</div>" +
        "<div class='col-1 d-flex'>" +
        "<button class='saveBtn flex-fill'>" +
        "<i class='fa-solid fa-floppy-disk'>" +
        "</i>" +
        "</button>" +
        "</div>" +
        "</div>"
    );

    startWork.add(1, "hours");
    timeblock.appendTo(containerEl);
    saveInput();
  }
  // Add data attribute to each timeblock which equals that timeblocks corresponding hour
  $(".time-block").each(function (i) {
    $(this).attr("data-id", i + 9);
  });

  getFromStorage();
};

// || Add relevant classes to text input to change colour based on time
updateColors = () => {
  $(".time-block").each(function () {
    var timeblockHour = parseInt($(this).attr("data-id"));
    var currentHour = parseInt(moment().format("H"));

    if (timeblockHour === currentHour) {
      $(this).find("textarea").addClass("present");
    } else if (timeblockHour < currentHour) {
      $(this).find("textarea").addClass("past");
    } else $(this).find("textarea").addClass("future");
  });
};

// Click event for save button
saveInput = () => {
  var saveBtnEl = $(".saveBtn");
  var saveAlertEl = $("#saveAlert");
  var saveAudio = new Audio("assets/sfx/save.wav");
  saveBtnEl.click(function () {
    saveAlertEl.removeClass("hide");
    setTimeout(() => {
      saveAlertEl.addClass("hide");
    }, 3000);
    saveAudio.play();
    // Save to localStorage
    var hour = $(this).parents(".time-block").data("id");
    var inputField = $(this).parents(".time-block").find("textarea").val();
    localStorage.setItem(hour, inputField);
  });
};

// || Print localStorage to corresponding timeblock input
getFromStorage = () => {
  $(".time-block").eq(0).find(".description").val(localStorage.getItem("9"));
  $(".time-block").eq(1).find(".description").val(localStorage.getItem("10"));
  $(".time-block").eq(2).find(".description").val(localStorage.getItem("11"));
  $(".time-block").eq(3).find(".description").val(localStorage.getItem("12"));
  $(".time-block").eq(4).find(".description").val(localStorage.getItem("13"));
  $(".time-block").eq(5).find(".description").val(localStorage.getItem("14"));
  $(".time-block").eq(6).find(".description").val(localStorage.getItem("15"));
  $(".time-block").eq(7).find(".description").val(localStorage.getItem("16"));
  $(".time-block").eq(8).find(".description").val(localStorage.getItem("17"));
};

// || Make clock tick
setInterval(() => {
  getCurrentDay();
  getCurrentTime();
  updateColors();
}, 1000);

init = () => {
  getCurrentDay();
  getCurrentTime();
  displayTimeblocks();
  updateColors();
};

init();
