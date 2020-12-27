function addUser() {
    playerName1 = document.getElementById("player1_name_input").value;
    playerName2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("playerName1", playerName1);
    localStorage.setItem("playerName2", playerName2);
    window.location = "game_page.html";
}