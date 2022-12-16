// Get the current day and print it to the element with the ID "currentDay"
getCurrentDay = () => {
  // Select the element
  var currentDayEl = $("#currentDay");

  // Use moment.js to format the current date
  var currentDay = moment(new Date()).format("MMMM Do, YYYY");

  // Set the text of the element to the current day
  currentDayEl.text(currentDay);
};

// Get the current time and print it to the element with the ID "currentTime"
getCurrentTime = () => {
  // Select the element
  var currentTimeEl = $("#currentTime");

  // Use moment.js to format the current time
  var currentTime = moment().format("h:mm a");

  // Set the text of the element to the current time
  currentTimeEl.text(currentTime);
};

// Display the time blocks for the work day
displayTimeblocks = () => {
  // Select the container element
  var containerEl = $(".container");

  // Set the start and end times for the work day
  var startWork = moment(09, "HH");
  var endWork = moment(17, "HH");

  // Loop through each hour in the work day
  while (startWork.hour() <= endWork.hour()) {
    // Format the current hour in the loop as a string (e.g. "9 AM")
    var timeblockHour = startWork.format("h a");

    // Create a new time block element
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

    // Add the time block element to the container
    timeblock.appendTo(containerEl);

    // Increment the time by 1 hour
    startWork.add(1, "hours");

    // Run the saveInput function for each time block
    saveInput();
  }

  // Add a data attribute to each time block element, with the value being the corresponding hour
  $(".time-block").each(function (i) {
    $(this).attr("data-id", i + 9);
  });

  // Get the input values from local storage and display them in the corresponding time blocks
  getFromStorage();
};

// Update the colors of the time blocks based on the current time
updateColors = () => {
  // Loop through each time block element
  $(".time-block").each(function () {
    // Get the hour for the time block (stored in a data attribute on the element)
    var timeblockHour = parseInt($(this).attr("data-id"));

    // Get the current hour
    var currentHour = parseInt(moment().format("H"));

    // Check if the time block hour is the same as the current hour
    if (timeblockHour === currentHour) {
      // If it is the same, add the "present" class and remove the other classes
      $(this).find(".description").addClass("present");
      $(this).find(".description").removeClass("future");
      $(this).find(".description").removeClass("past");
    }
    // Check if the time block hour is before the current hour
    else if (timeblockHour < currentHour) {
      // If it is before, add the "past" class and remove the other classes
      $(this).find(".description").addClass("past");
      $(this).find(".description").removeClass("future");
      $(this).find(".description").removeClass("present");
    }
    // If none of the above conditions are true, the time block must be in the future
    else {
      // Add the "future" class and remove the other classes
      $(this).find(".description").addClass("future");
      $(this).find(".description").removeClass("past");
      $(this).find(".description").removeClass("present");
    }
  });
};

// Save the input for a time block to local storage
saveInput = () => {
  // Select the save button elements
  var saveBtnEl = $(".saveBtn");

  // Select the save alert element
  var saveAlertEl = $("#saveAlert");

  // Create a new audio element for the save sound
  var saveAudio = new Audio("assets/sfx/save.wav");

  // Add a click event listener to the save buttons
  saveBtnEl.click(function () {
    // Show the save alert
    saveAlertEl.removeClass("hide");

    // Hide the save alert after 3 seconds
    setTimeout(() => {
      saveAlertEl.addClass("hide");
    }, 3000);

    // Play the save sound
    saveAudio.play();

    // Get the hour for the time block (stored in a data attribute on the element)
    var hour = $(this).parents(".time-block").data("id");

    // Get the value of the input field for the time block
    var inputField = $(this).parents(".time-block").find(".description").val();

    // Save the input field value to local storage using the hour as the key
    localStorage.setItem(hour, inputField);
  });
};

// Get the input values from local storage and display them in the corresponding time blocks
getFromStorage = () => {
  // Loop through each time block element
  $(".time-block").each(function () {
    // Get the hour for the time block (stored in a data attribute on the element)
    var storedHour = $(this).data("id");

    // Get the stored input value for the time block from local storage
    var storedInput = localStorage.getItem(storedHour);

    // If there is a stored input value, set the value of the input field to the stored value
    if (storedInput) {
      $(this).find(".description").val(storedInput);
    }
  });
};

// Update the current day, time, and time block colors every second
setInterval(() => {
  getCurrentDay();
  getCurrentTime();
  updateColors();
}, 1000);

// Initialize the page by getting the current day, time, displaying the time blocks, and updating the colors
init = () => {
  getCurrentDay();
  getCurrentTime();
  displayTimeblocks();
  updateColors();
};

// Run the initialization function
init();
