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
