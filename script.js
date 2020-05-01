
var saveButton = document.querySelector("#save_button");
var userInput = document.querySelector("#event-1");
// var userInputA = JSON.stringify(userInput[userInput.value]);

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var saveButton = document.querySelector("#event-1").value
    localStorage.setItem("user_input", saveButton);

});


// function clickSave() {

// }



// localStorage.setItem("user_input", "tester");

//  $("#save_button").on("click", function () {
//     localStorage.setItem("user_input", userInputA);
//     alert("This works");

//  });