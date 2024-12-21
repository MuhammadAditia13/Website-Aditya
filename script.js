function searchGame() {
    var input = document.getElementById("gameSearchinput").value.toLowerCase();  // Corrected ID here
    var gameList = document.getElementById("gameList").getElementsByClassName("game-populer-style");

    for (var i = 0; i < gameList.length; i++) {
        var game = gameList[i].getAttribute("data-game").toLowerCase();
        if (game.includes(input)) {
            gameList[i].style.display = "";  // Show the game
        } else {
            gameList[i].style.display = "none";  // Hide the game
        }
    }
    return false;  // Prevent form from submitting
}

// data game