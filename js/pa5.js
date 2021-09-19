// Author: Jacob Williams
// Purpose: takes input from html and generates two types encryption to display
// create g;pna; variables for certain html elements
var input_text = document.getElementById("text_field");
var ceasar_out = document.getElementById("caesar_cipher");
var square_out = document.getElementById("square_cipher");
var slider = document.getElementById("slider_field");
var slider_num = document.getElementById("slider_number")
var update = document.getElementsByClassName("update_button");
// define alphabet array to get index and square array to be shuffled
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var square = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];
// setting up first load into page
var newText = ceasarCipher(input_text.value, parseInt(slider_field.value));
ceasar_out.innerText = newText;
var newText2 = squareCiper(input_text.value);
square_out.innerText = newText2;
createGrid();
// dfeine oninput for text field
input_text.oninput = function() {
  var newText = ceasarCipher(input_text.value, parseInt(slider_field.value));
  ceasar_out.innerText = newText;
  var newText2 = squareCiper(input_text.value);
  square_out.innerText = newText2;
}
// define oninput for slider
slider.oninput = function(){
  var newText = ceasarCipher(input_text.value, parseInt(slider_field.value));
  ceasar_out.innerText = newText;
  slider_num.innerText = slider_field.value;
}
// defines button pressed function for update square button
// shuffles the square array and creates the html table, then displays new square cipher
function button_pressed(){
  shuffle(square);
  createGrid();
  var newText = squareCiper(input_text.value);
  square_out.innerText = newText;
}
// takes the given value from the input field and generates encryption
function squareCiper(str){
  var str = str.toLowerCase();
  var ret = "";
  for(let i = 0; i < str.length; i++){
    var curr = getIndex(str[i]);
    if(curr == -1 || str[i] == "z"){
      ret += str[i];
      continue;
    }else{
      ret += square[curr];
    }
  }
  return ret;
}
// createGrid takes the current square array and maniuplates the html table to show new grid
function createGrid(){
  let curr_row;
  for(let i = 0; i < 5; i++){
    let curr_row = document.getElementById("row"+i);
    curr_row.innerHTML =
      "<td>"+ square[i*5]+"</td>" +
      "<td>"+ square[i*5+1]+"</td>" +
      "<td>"+ square[i*5+2]+"</td>" +
      "<td>"+ square[i*5+3]+"</td>" +
      "<td>"+ square[i*5+4]+"</td>";
    console.log(curr_row.innerHTML);
  }
}
// URL: https://javascript.info/task/shuffle
// function not written by me. piazza post @65
// shuffles array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// str: given string from input field
// shift: the current value of the slider
// given the input and shift value ceasarCipher generates the new encryption
function ceasarCipher(str, shift){
  var str = str.toLowerCase();
  var ret = "";
  for(let i = 0; i < str.length ; i++){
    var curr = getIndex(str[i]);
    if(curr == -1){
      ret += str[i];
      continue;
    }
    if(curr + shift > alphabet.length-1){
      ret += alphabet[(curr + shift)-alphabet.length];
    }else{
      ret += alphabet[curr + shift];
    }
  }
  return ret;
}
// locates the given value within the alphabet and returns the index. if not
// in the alphabet returns -1
function getIndex(val){
  for(let i = 0; i< alphabet.length; i++){
    if(alphabet[i] == val){
      return i;
    }
  }
  return -1;
}
