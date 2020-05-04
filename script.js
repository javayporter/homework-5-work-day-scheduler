//Define Variables
var saveButton = document.querySelector("#save_button");
var saveButton2 = document.querySelector("#save_button2");
var saveButton3 = document.querySelector("#save_button3");
var saveButton4 = document.querySelector("#save_button4");
var saveButton5 = document.querySelector("#save_button5");
var saveButton6 = document.querySelector("#save_button6");
var saveButton7 = document.querySelector("#save_button7");
var saveButton8 = document.querySelector("#save_button8");
var saveButton9 = document.querySelector("#save_button9");
var userInput = document.querySelector("#event-1");
var userInput2 = document.querySelector("#event-2");
var userInput3 = document.querySelector("#event-3");
var userInput4 = document.querySelector("#event-4");
var userInput5 = document.querySelector("#event-5");
var userInput6 = document.querySelector("#event-6");
var userInput7 = document.querySelector("#event-7");
var userInput8 = document.querySelector("#event-8");
var userInput9 = document.querySelector("#event-9");


//Click Save and Store User Input
saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-1").value
    localStorage.setItem("7AM_Event", saveButton);

});

saveButton2.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-2").value
    localStorage.setItem("8AM_Event", saveButton);

});

saveButton3.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-3").value
    localStorage.setItem("9AM_Event", saveButton);

});

saveButton4.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-4").value
    localStorage.setItem("10AM_Event", saveButton);

});

saveButton5.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-5").value
    localStorage.setItem("11AM_Event", saveButton);

});

saveButton6.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-6").value
    localStorage.setItem("12PM_Event", saveButton);

});

saveButton7.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-7").value
    localStorage.setItem("1PM_Event", saveButton);

});

saveButton8.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-8").value
    localStorage.setItem("2PM_Event", saveButton);

});

saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-9").value
    localStorage.setItem("3PM_Event", saveButton);

});

//Persist on Refresh
window.onload = function () {
    localStorage.getItem(this.saveButton);
}

