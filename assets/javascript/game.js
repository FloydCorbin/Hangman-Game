// Javascript Elements:

// 1)start on key press (onkeyup)

// 2)array of words to guess <---how do you display?


// 3)choose words at random after you have failed/succeeded on current words

// 4) varible to define: wins, losses, geusses remaining, letters guessed 

<script type="text/javascript">


var lebowskiWords =['Karl Hungus', 'The Dude', 'Jeffrey Lebowski', 'Maude Lebowski', 'In-N-Out Burger', 'Ralphs', 'Saddam Housein', 'Nihilists', 'Walter Sobchak', 'Marty and Nancy Ackerman', 'Palmeranian', 'Donnie', 'Jesus Quintana', 'The Stranger', 'Bunny Lebowski', 'Oat Soda', 'White Russians', 'Ferrit', 'Bowling', 'Veitnam']

function alphabetChecker(x){
var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for (var i=0; i < alphabet.length; i++){
          if (x === alphabet[i]) {
            console.log("Vowel"); 

}
console.log(lebowskiWords.length)

// Can I create the same structure above and have it wrapped in several if statements? The if statement is informed by a random number generator that has a rand of however many word I have in the lebowskiWords array.

function vowelChecker(x){
        var vowelArray = ["a", "e", "i", "o", "u"]
        for (var i=0; i < vowelArray.length; i++){
          if (x === vowelArray[i]) {
            console.log("Vowel"); 
          } else{ console.log ("this is not a Vowel")}
        }


      }

      // The following example generated data and this might be something I can adapt to generate the blanks in aeach word. this is missing a piece which would evaluate each word in the array and possibly help inform the rules of the page layout...

		var text = "";
		var i;
		for (i = 0; i < 5; i++) {
		    text += "The number is " + i + "<br>";
		}
		document.getElementById("letterBlock").innerHTML = text;

		// end

  var wins = 0, losses = 0;

  document.onkeyup = function (event) {

    var user-choice = event.key;
    var computerChoice = ["r", "p", "s"][Math.floor(Math.random() * 3)];

    if (userChoice === 'r') {
      if (computerChoice === 's') {
        wins++;
      } else if (computerChoice === 'p') {
        losses++;
      } else {
        ties++;
      }
    }

    if (userChoice === 'p') {
      if (computerChoice === 'r') {
        wins++;
      } else if (computerChoice === 's') {
        losses++;
      } else {
        ties++;
      }
    }

    if (userChoice === 's') {
      if (computerChoice === 'p') {
        wins++;
      } else if (computerChoice === 'r') {
        losses++;
      } else {
        ties++;
      }
    }

    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = losses;

  }
</script>