var input_text = document.getElementById("text_field");
var ceasar_out = document.getElementById("caesar_cipher");
var square_out = document.getElementById("square_cipher");

input_text.oninput = function() {
  ceasar_out.innerText = input_text.value;
}

console.log("finished running js");
