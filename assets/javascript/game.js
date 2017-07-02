

// 1) Use key events to listen for the letters that your players will type.
// DONE  SEE LINES 31 (ONKEYUP EVENT) AND 47 (INPUT VALIDATION)

//Display the following on the page:
// 2) Press any key to get started!
// 3) Wins: (# of times user guessed the word correctly).
// 3A)  Logic for wins: this may come from watching for a 'completed word'
// 4) Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// We need to display wrong guesses
// 5) Number of Guesses Remaining: (# of guesses remaining for the user).
// DOCUMENT SET TO UPDATE HTML ANCHORS (LINE40); KEYSTROKES ARE NOT BEING COUNTED

// 6) If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// LOGIC IS BUILT, NOT SURE HOW TO DISPLAY

// 7) As the user guesses the correct letters, reveal them: m a d o _  _ a.
// NOT STARTED

// 8) After the user wins/loses the game should automatically choose another word and make the user play it.
// NOT STARTED
// *****************************************************

// THE WORDS FOR THE GAME
var lebowskiWords =['Karl Hungus', 'The Dude', 'Jeffrey Lebowski', 'Maude Lebowski', 'InNOut Burger', 'Ralphs', 'Saddam Hossain', 'Nihilists', 'Walter Sobchak', 'Cynthia and Marty Ackerman', 'Palmeranian', 'Donnie', 'Jesus Quintana', 'The Stranger', 'Bunny Lebowski', 'Oat Soda', 'White Russians', 'The Ferret', 'Bowling', 'The Rug','Little Lebowski Urban Acheivers', 'Creedence Clearwater Revival']

// VARIABLE FOR WINS
var wins = 0;

// VARIABLE FOR NUMBER OF GUESSES PLAYER MADE IN THIS GAME
var numberOfGuesses = [];



// VARIABLE FOR LOSSES
var losses = 0;

// VARIABLE FOR RANDOM SELECTION OF WORD
var word = [Math.floor(Math.random() * 22)];

// VARIABLE FOR THE WORD IN CURRNT GAME
var currentWord = (lebowskiWords[word]);

// THIS IS THE EVENT HANDLER FOR TO START THE GAME; IT ALSO VALIDATES THE ENTERED LETTER AGAINST THE WORD
// CURRENTGUESS STORES KEYSTROKES; alphabetChecker VALIDATES
var wrongLetters = [];
var correctLetters =[];
// CORRECT INDEXES
var currentCorrectIndexes = [];
for (var i = 0; i < currentWord.length; i++) {
  if (currentWord[i]==' '){
    currentCorrectIndexes.push(i);
  }
  console.log('spaces: ' +currentCorrectIndexes.length);
}
var newGameFlag;

document.onkeyup = function (event) {
  var currentGuess = event.key
  // VARIABLE FOR THE NUMBER OF GUESSES Remaining
  var guessesRemaining = 10;
  console.log(currentGuess);
  if (alphabetChecker(currentGuess)){
    var notFound=true;
    for (var i = 0; i < currentWord.length; i++) {
      if(currentGuess == currentWord[i].toLowerCase()){
        if (currentCorrectIndexes.indexOf(i)==-1){
          currentCorrectIndexes.push(i);
        }
        if (correctLetters.indexOf(currentWord[i])==-1){
          correctLetters.push(currentWord[i].toLowerCase());
        }

        console.log(currentCorrectIndexes);
        notFound=false
      }


    }
    if (notFound){
      console.log(wrongLetters.indexOf(currentGuess));
      if (wrongLetters.indexOf(currentGuess)==-1){
        wrongLetters += currentGuess;
      }
    }

  }
  var displayedWord='';
  for (var i = 0; i < currentWord.length; i++) {
    if (currentCorrectIndexes.indexOf(i)!=-1){
      displayedWord += currentWord[i];
    } else{
      displayedWord += '_';
    }

  }
  numberOfGuesses = 10 - wrongLetters.length
  console.log("guesses remaining: " + numberOfGuesses);
  if (numberOfGuesses ==0){
    losses +=1;
    newGameFlag=true;
  }
  console.log("indexes: "+ currentCorrectIndexes.length)
  console.log("word length: "+ currentWord.length)
  console.log("wrong letters: "+ wrongLetters)
  if (currentCorrectIndexes.length==currentWord.length){
    wins +=1;
    newGameFlag=true;
  }
  if (newGameFlag==true){
    word = [Math.floor(Math.random() * 22)];
    currentWord = (lebowskiWords[word]);
    numberOfGuesses=10;
    currentCorrectIndexes=[];
    wrongLetters=[];
    correctLetters=[];
    newGameFlag=false;
    console.log("game ended- new word: "+ currentWord);
    displayedWord=''
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i]==' '){
        currentCorrectIndexes.push(i);
      }
      console.log('spaces: ' +currentCorrectIndexes.length);
    }
    for (var i = 0; i < currentWord.length; i++) {
      if (currentCorrectIndexes.indexOf(i)!=-1){
        displayedWord += currentWord[i];
      } else{
        displayedWord += '_';
      }
    }
  }
  console.log("wins: " + wins);
  console.log("losses: " + losses);
  console.log(displayedWord);

  document.getElementById('guesses-remaining').textContent = numberOfGuesses;
  document.getElementById('displayed-word').textContent = displayedWord;
  document.getElementById('chosen-letters').textContent = correctLetters.join('');
  document.getElementById('wins').textContent = wins;
  document.getElementById('wrong-letters').textContent = wrongLetters;
  document.getElementById('losses').textContent = losses;


}


console.log(currentWord);






// THIS COULD DISPLAY THE WORD-IT IS INCOMPLETE AND NOT SURE IT WILL WORK WITH
//  HOW THINGS ARE SETUP
// var currentGuess = 'i';
// var currentCorrectIndexes = [];
//
// function prepopulateUnknownLetter (){
//   var knownLetters;
//   for (var i = 0; i < currentWord.length; i++ ) {
//     if (lettersInWord) {}
//     knownLetters += ' _';
//
//   }	return(knownLetters);
// }
//
// var blankWord = (prepopulateUnnownLetter());



// THIS IS GOING TO BE A COUNT OF ACCEPTED GUESSES
// function invalidKeyCounter() {
//   if (isLetter = false) {
//     numberOfGuesses += 1;
//     guessesRemaining = 10 - numberOfGuesses;
//     return(guessesRemaining)
//   }
//
// }

// THIS IS A HOOK FOR VALUES IN HTML - They create a null value error
// document.getElementById('guesses-remaining').textContent = guessesRemaining;
// document.getElementById('chosen-letters').textContent = theChosen;
// document.getElementById('wins').textContent = wins;
// document.getElementById('losses').textContent = losses;
// document.getElementById('wrong-letters').textContent = wrongLetters;

//VALIDATES USER ENTRY, DEFINE NON-ALPHABET KEYSTROKES AS 'FALSE'
function alphabetChecker(x){
  var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z']

  var isLetter = false;
  for (var i=0; i < alphabet.length; i++){
    if (x === alphabet[i]) {
      return(true);
    }
  }
}

// THIS IS AN EXAMPLE OF THE CODE ABOVE
// function vowelChecker(x){
//         var vowelArray = ["a", "e", "i", "o", "u"]
//         for (var i=0; i < vowelArray.length; i++){
//           if (x === vowelArray[i]) {
//             console.log("Vowel");
//           } else{ console.log ("this is not a Vowel")}
//         }
//       }








//THIS IS THE BEGINNING OF IDENTIFYING A CORRECT GUESS
