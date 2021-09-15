var input_text = document.getElementById("text_field");
var ceasar_out = document.getElementById("caesar_cipher");
var square_out = document.getElementById("square_cipher");

input_text.onInput = function() {
  caesar_out.innerText = input_text.value;
}

console.log("finished running js");
