// Variables to define dice's values

var d1 = 6;
var d2 = 6;


function rollDices() {
    // Main function

    // dice value setter
    d1 = Math.floor((Math.random() * 6)) + 1;
    d2 = Math.floor((Math.random() * 6)) + 1;


    function removeDiceNumber(p) {
        // removes the css class that set the dice's character
        // takes the number of the player as an input
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-one");
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-two");
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-three");
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-four");
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-five");
        document.querySelector(".player" + p + " i").classList.remove("fa-dice-six");
    }

    function addDiceNumber(p, n) {
        // sets the proper character for dices
        // takes the number of the player and the result od the roll as an input
        var number = "six";
        if(n === "1"){number = "one";}
        else if(n === "2"){number = "two";}
        else if(n === "3"){number = "three";}
        else if(n === "4"){number = "four";}
        else if(n === "5"){number = "five";}
        else {number = "six";}

        document.querySelector(".player" + p + " i").classList.add("fa-dice-" + number);
    }


    // Sets the tittle of the site, depending on the dice's numbers

    function rollResult() {
        if(d1 > d2) {
            document.querySelector("h1").textContent = "Player 1 wins!";
        }
        else if(d2 > d1) {
            document.querySelector("h1").textContent = "Player 2 wins!";
        }
        else {
            document.querySelector("h1").textContent = "It's a draw!";
        }
    }


    // Setting the fist dice

    if(d1 === 1) {
        removeDiceNumber("1");
        addDiceNumber("1", "1");
    }

    else if(d1 === 2) {
        removeDiceNumber("1");
        addDiceNumber("1", "2");
    }

    else if(d1 === 3) {
        removeDiceNumber("1");
        addDiceNumber("1", "3");
    }

    else if(d1 === 4) {
        removeDiceNumber("1");
        addDiceNumber("1", "4");
    }

    else if(d1 === 5) {
        removeDiceNumber("1");
        addDiceNumber("1", "5");
    }

    else {
        removeDiceNumber("1");
        addDiceNumber("1", "6");
    }


    // Setting the second dice

    if(d2 === 1) {
        removeDiceNumber("2");
        addDiceNumber("2", "1");
    }

    else if(d2=== 2) {
        removeDiceNumber("2");
        addDiceNumber("2", "2");
    }

    else if(d2 === 3) {
        removeDiceNumber("2");
        addDiceNumber("2", "3");
    }

    else if(d2 === 4) {
        removeDiceNumber("2");
        addDiceNumber("2", "4");
    }

    else if(d2 === 5) {
        removeDiceNumber("2");
        addDiceNumber("2", "5");
    }

    else {
        removeDiceNumber("2");
        addDiceNumber("2", "6");
    }

    // Call the tittle function
    rollResult();
}