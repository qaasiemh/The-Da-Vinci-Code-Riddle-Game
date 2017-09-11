//-------------------- index -----------------------------------

function SubmitAnswer () {
    var AnswerQ = document.getElementById("typeAnswer").value;
    if (AnswerQ.toLowerCase() == "leonardo da vinci") {
        document.getElementById("answerQ1").innerHTML = "Correct! You can now begin the game";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
    } else {
        document.getElementById("answerQ1").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
    }
}

function FirstClue () {
    window.location = "https://qaasiemh.github.io/The-Da-Vinci-Code-Riddle-Game/1st.html";
}

//-------------------- 1st Page -----------------------------------

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $("#myModal").modal();
}

function SubmitR1 () {
    var AnswerQ = document.getElementById("typeAnswerR1").value;
    if (AnswerQ.toLowerCase() == "hid") {
        document.getElementById("answerR1").innerHTML = "Correct! You can proceed to the next clue";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        $("#myModal2").modal();
    } else {
        document.getElementById("answerR1").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
        $("#myModal2").modal();
    }
}

function TryAgainR1 () {
    $("#myModal").modal();
    document.getElementById("typeAnswerR1").value = "";
}

function SecondClue () {
    window.location = "https://qaasiemh.github.io/The-Da-Vinci-Code-Riddle-Game/2nd.html";
}

//-------------------- 2nd Page -----------------------------------


function SubmitR2 () {
    var AnswerQ = document.getElementById("typeAnswerR2").value;
    if (AnswerQ.toLowerCase() == "the") {
        document.getElementById("answerR2").innerHTML = "Correct! You can proceed to the next clue";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        $("#myModal2").modal();
    } else {
        document.getElementById("answerR2").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
        $("#myModal2").modal();
    }
}

function TryAgainR2 () {
    $("#myModal").modal();
    document.getElementById("typeAnswerR2").value = "";
}

function ThirdClue () {
    window.location = "https://qaasiemh.github.io/The-Da-Vinci-Code-Riddle-Game/3rd.html";
}

//-------------------- 3rd Page -----------------------------------

function SubmitR3 () {
    var AnswerQ = document.getElementById("typeAnswerR3").value;
    if (AnswerQ.toLowerCase() == "holy") {
        document.getElementById("answerR3").innerHTML = "Correct! You can proceed to the next clue";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        $("#myModal2").modal();
    } else {
        document.getElementById("answerR3").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
        $("#myModal2").modal();
    }
}

function TryAgainR3 () {
    $("#myModal").modal();
    document.getElementById("typeAnswerR3").value = "";
}

function FourthClue () {
    window.location = "https://qaasiemh.github.io/The-Da-Vinci-Code-Riddle-Game/4th.html";
}

//-------------------- 4th Page -----------------------------------

function SubmitR4 () {
    var AnswerQ = document.getElementById("typeAnswerR4").value;
    if (AnswerQ.toLowerCase() == "grail") {
        document.getElementById("answerR4").innerHTML = "Correct! You can proceed to the final clue";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        $("#myModal2").modal();
    } else {
        document.getElementById("answerR4").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
        $("#myModal2").modal();
    }
}

function TryAgainR4 () {
    $("#myModal").modal();
    document.getElementById("typeAnswerR4").value = "";
}

function FifthClue () {
    window.location = "https://qaasiemh.github.io/The-Da-Vinci-Code-Riddle-Game/final.html";
}

//-------------------- Final Page ---------------------------------

function SubmitAnswerFinal () {
    var AnswerQ = document.getElementById("typeAnswerFinal").value;
    if (AnswerQ.toLowerCase() == "leonardo da vinci hid the holy grail") {
        document.getElementById("answerQ1").innerHTML = "Correct! You have unlocked the trailer!";
        document.getElementById("beginGame").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
    } else {
        document.getElementById("answerQ1").innerHTML = "Incorrect. Please try again. *NB Google is allowed";
        document.getElementById("beginGame").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
    }
}

function UnlockTrailer () {
    document.getElementById("lockVid").style.display = "none";
}









