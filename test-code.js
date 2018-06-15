/* let testPrompt = prompt("what is your fav fruit?", "fruit");

    // second string is the suggest response */



// let obj1 = {
    
// }



/* // June 14, 2018
// CREATES ARRAY OF 100 SQUARES, ADDS TO STRING, AND LOGS
function numSquared(num) {
    return num*num;
  }
  
  let squaredArray = [];
  
  for (i = 0; i < 100; i++) {
    squaredArray.push(numSquared(Math.random()))
  }
  
  let squaredString = squaredArray.join(', ');
  
  console.log(squaredString);
 */


/* //June 14, 2018
// Shows that functions have access to and can modify outer variables
let userName = 'John';

function showMessage() {
    userName = 'Bobby';

    let message = 'Hello' + userName;
    console.log(message);
}

console.log(userName);

showMessage();

console.log(userName); */

// JUNE 15, 2018
// function ask(question, yes, no) {
//     if confirm(question) yes()
//     else no();
// }

// function showOk() {
//     alert( "You agreed. ");
// }

// function showCancel() {
//     alert( "You canceled" );
// }

// ask("Do you agree?", showOk, showCancel);



// //NUMBER GUESSING PROGRAM, USING CALLBACKS
// function numGuess(guess, correct, incorrect) {
//   let rand = Math.floor(Math.random() * 10);
//   if (rand < guess) correct()
//   else incorrect();
//   alert("The correct number was " + rand);
// }

// numGuess(
//   prompt("Guess a number 1 to 10"),
//   function() {alert("You guessed correct!")},
//   function() {alert("You guessed incorrect!")}
// );



// // CAPITALIZE FIRST LETTER FUNCTION
// function capitalize(string) {
//   let stringFirstChar = string.slice(0, 1);
//   let stringFirstCharCap = stringFirstChar.toUpperCase();
//   // return stringFirstCharCap;
//   alert(stringFirstCharCap);
// }
// capitalize("Hello");
// capitalize("whAt's Up");
// capitalize("yess");
// capitalize("no");