playerName1 = localStorage.getItem("playerName1");
playerName2 = localStorage.getItem("playerName2");
playerScore1 = 0;
playerScore2 = 0;
document.getElementById("playerName1").innerHTML = playerName1 + " : ";
document.getElementById("playerName2").innerHTML = playerName2 + " : ";
document.getElementById("playerScore1").innerHTML = playerScore1;
document.getElementById("playerScore2").innerHTML = playerScore2;
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + playerName1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + playerName2;
function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("word in lowercase is " + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    wordLengthDivideBy2 = Math.floor(word.length/2);
    charAt2 = word.charAt(wordLengthDivideBy2);
    console.log(charAt2);
    wordLengthMinus1 = word.length - 1;
    charAt3 = word.charAt(wordLengthMinus1);
    console.log(charAt3)
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    questionWord = "<h4 id='wordDisplay'> Question : "+removeCharAt3+"</h4>";
    inputBox = "<br>Answer : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
}
questionTurn = "player1";
answerTurn = "player2";
function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("Answer in lowercase - " + answer);
    if (answer == word) {
        if (answerTurn == "player2") {
            playerScore2++;
            document.getElementById("playerScore2").innerHTML = playerScore2;
        } else {
            playerScore1++;
            document.getElementById("playerScore1").innerHTML = playerScore1;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + playerName2;
    } else {
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + playerName1;
    }
    if (answerTurn == "player2") {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + playerName1;
    } else {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + playerName2;
    }
    document.getElementById("output").innerHTML = "";
}