
document.querySelector(".btn").addEventListener("click", rollDice);

function rollDice () {
    var randNum1 = Math.floor((Math.random()*6) + 1);
    var str1 = "images/dice" + randNum1 + ".png";

    var randNum2 = Math.floor((Math.random()*6) + 1);
    var str2 = "images/dice" + randNum2 + ".png";

    document.querySelector("img").setAttribute("src", str1);
    document.querySelectorAll("img")[1].setAttribute("src", str2);

    if (randNum1 > randNum2) {
        document.querySelector("h1").textContent = "Player 1 Wins 🚩";
    }
    else if (randNum1 < randNum2) {
        document.querySelector("h1").textContent = "Player 2 Wins 🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }
}
