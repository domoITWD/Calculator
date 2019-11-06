// half input //
var executeButton = document.getElementById("half-button");
executeButton.addEventListener("click", halfNumber);

function halfNumber() {
  var content = document.getElementById("half-input").value;
  var divide = content / 2;

  alert("Your input divided by two is " + divide + ".")
  console.log("Half of " + content + " is " + divide + ".");
}

// fortune  //
var executeFortune = document.getElementById("fortune-button");
executeFortune.addEventListener("click", fortune);

function fortune() {
  var outputfor = document.getElementById("fortune-output");
  var mixedfortune = ["You are contemplating some action which will bring credit upon you.", "A pleasant expeience is ahead: don't pass it by.", "What ends on hope does not end at all."];
  var fortuneindex = Math.floor(Math.random() * mixedfortune.length);

  outputfor.innerHTML = mixedfortune[fortuneindex]
  restyle();
}

// restyle //
function restyle () {
  var outputcolor = document.getElementById("fortune-output");
  var mixedstyles = ["#55B3D9","#ED8335","#D94A4A"];
  var mixedIndex =  Math.floor(Math.random() * mixedstyles.length);

  outputcolor.style.color = mixedstyles[mixedIndex]
}
