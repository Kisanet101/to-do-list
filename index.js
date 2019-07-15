var button = $('button')
var container = $('.container')
var floors = $('floors')
function checkForChores() {
  event.preventDefault();
  var x = document.getElementById("myText").value
  //var chore1 = "Wash the Dishes";
  //if (chore1 == "Wash the Dishes") {
    //console.log("You will need to put the dirty dishes in the dishwasher")

  //} else {
    //console.log("Good luck on your chore.")
    console.log(x)
    container.append(
    `<p> You need to put the dirty dishes in the dish dishwasher</p>`);
}
button.on("click", checkForChores)
