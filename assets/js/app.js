// var currentHour = parseInt(moment().format("h"));
// var timeblockHour = $(".hour");
// var timeblocks = $(".time-block");

getCurrentDay = () => {
  var currentDayEl = $("#currentDay");
  var currentDay = moment(new Date()).format("MMMM Do, YYYY");
  currentDayEl.text(currentDay);
};

getCurrentTime = () => {
  var currentTimeEl = $("#currentTime");
  var currentTime = moment().format("h:mm a");
  currentTimeEl.text(currentTime);
};

displayTimeblocks = () => {
  var container = $(".container");
  var startWork = moment(09, "HH");
  var endWork = moment(17, "HH");

  // Creates timeblock for each hour
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
        "<textarea class='description flex-fill p-2' name='' id='' cols='30' rows='10'>" +
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
    timeblock.appendTo(container);
    saveInput();
  }

  // Assign id to each timeblock, starting at start of work
  $(".time-block").each(function (i) {
    $(this).attr("data-id", i + 9);
  });

  getFromStorage();
};

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

saveInput = () => {
  var saveBtnEl = $(".saveBtn");
  var saveAlert = $("#saveAlert");
  var saveAudio = new Audio("assets/sfx/save.wav");
  saveBtnEl.click(function () {
    saveAlert.removeClass("hide");
    setTimeout(() => {
      saveAlert.addClass("hide");
    }, 3000);
    saveAudio.play();
    var hour = $(this).parents(".time-block").data("id");
    var inputField = $(this).parents(".time-block").find("textarea").val();
    localStorage.setItem(hour, inputField);
  });
};

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

// Update time dynamically
setInterval(() => {
  getCurrentDay();
  getCurrentTime();
  updateColors();
}, 1000);

init = () => {
  getCurrentDay();
  displayTimeblocks();
  updateColors();
};

init();
