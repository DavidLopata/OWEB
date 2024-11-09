let zbor;
let attempts = 5;

function start() {
    document.getElementById("userGuess").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
    init();
}
function init() {
    attempts = 5;
    document.getElementById("message").innerHTML = "";
    document.getElementById("userGuess").value = ""; 
    const zborovi = ["KRAVA", "MACOR", "ZELKA", "KUCHE", "TIGAR", "SLON", "PRASE", "VOLK", "LAV", "GULAB"];
    var ran = Math.floor(Math.random() * zborovi.length);
    zbor = zborovi[ran];
    document.getElementById("skrien").innerHTML = outputBlur(zbor); 
}

function outputBlur(zbor) {
    var length = zbor.length;
    var skrien = [];
    for (var i = 0; i < length; ++i) {
        skrien[i] = "_";
    }
    var b1 = Math.floor(Math.random() * length);
    var b2 = Math.floor(Math.random() * length);
    while (b1 === b2) {
        b2 = Math.floor(Math.random() * length);
    }
    skrien[b1] = zbor[b1];
    skrien[b2] = zbor[b2];

    return skrien.join(" ");
}

function checkGuess() { 
   
    const userInput = document.getElementById("userGuess").value.toUpperCase(); 
    if (userInput === zbor && attempts != 0 || attempts == 6) {
        attempts = 6;
        document.getElementById("skrien").innerHTML = zbor;
        document.getElementById("message").innerHTML = "Congrats! ";
        if (confirm("You Win! The word was " + zbor + ". Do you want to play again?")) {
            init(); } 
    }
    else if (attempts > 0){
        attempts--;
            document.getElementById("message").innerHTML = "Wrong, try again. Attempts left: " + attempts;
        } 
    if (attempts == 0) {
        document.getElementById("skrien").innerHTML = zbor;
        document.getElementById("message").innerHTML = "Better luck next time! ";
        if (confirm("You Lost! The word was " + zbor + ". Do you want to play again?")) {
            init();
            }
    }
}



window.addEventListener("load", start, false);