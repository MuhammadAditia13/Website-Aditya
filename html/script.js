// Search-Engine
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
// Search-Engine END

// Pagination

const itemsPerPage = 10;
const items = document.querySelectorAll('.item');
const paginationContainer = document.getElementById('pagination');
const totalPages = Math.ceil(items.length / itemsPerPage)

function showPage(page) {
    items.forEach(item => (item.style.display = 'none'));
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < items.length; i++) {
        items[i].style.display = 'block'
    }
    const buttons = document.querySelectorAll('.pagination button');
        buttons.forEach(button => button.classList.remove('active'));
        buttons[page - 1].classList.add('active');
}

function createPagination() {
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => showPage(i));
        paginationContainer.appendChild(button);
    }
    // Set the first page as active by default
    showPage(1);
}

createPagination();