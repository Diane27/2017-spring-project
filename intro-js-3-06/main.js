var number = Math.floor(Math.random() * 10);
var input = document.getElementById("guess-input");
var button = document.getElementById("guess-button");
var output = document.getElementById("output");

function makeGuess () {
	
	if (parseInt(input.value, 10) === number) output.textContent = "Correct";
	else output.textContent = "";
}

button.addEventListener('click', makeGuess)
