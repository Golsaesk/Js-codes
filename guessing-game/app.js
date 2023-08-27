//We're gonna make a guessing game OK?
//We make a random number with Random function from JS
//Then we keep it in a variable 
//A textbox and a button for the user to guess the random number
//If the number user enter is lower than the random number we say go up
//If the number user enter is greater than the random number we say go down
//If the user guess the number right, less than 10 tries he wins
//And above 10 tries he loses. OK? Got it?

var mynumber = Math.floor((Math.random() * 100));
var remainGuesse = 10;
console.log('The number is ' + mynumber);


document.getElementById('resetGame').addEventListener('click', function() {
    resetGame();
});

document.getElementById('subt').addEventListener('click', function() {
    if(remainGuesse == 0) {
        alert("You don't have another chance!");
        return;
    }

    var num = parseInt(document.getElementById('guessField').value);
    var result = guesse(num);
    remainGuesse -= 1;
    document.getElementById('remGuess').innerText = remainGuesse.toString();
    if(remainGuesse == 0 && !result) {
        document.getElementById('lowOrHi').innerText = "You Lose and there is no chance to try! ";
        document.getElementById('resetGame').style.visibility = 'visible';
    }

    if(result) {
        document.getElementById('resetGame').style.visibility = 'visible';
    }
});

function guesse(num) {
    if(num > mynumber) {
        document.getElementById('lowOrHi').innerText = "The number is lower.";
        return false;
    }
    else if(num < mynumber) {
        document.getElementById('lowOrHi').innerText = "The number is higher.";
        return false;
    }
    else {
        document.getElementById('lowOrHi').innerText = "You guesse the number right. You wins! ";
        return true;
    }
}

function resetGame() {
    mynumber = Math.floor((Math.random() * 100));
    document.getElementById('lowOrHi').innerText = "";
    remainGuesse = 10;
    document.getElementById('remGuess').innerText = remainGuesse.toString();
    document.getElementById('guessField').value = "";
    document.getElementById('resetGame').style.visibility = 'hidden';
}
