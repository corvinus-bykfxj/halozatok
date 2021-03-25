window.onload = function () {
    letöltés();
}
var kérdések;
var kérdésSzáma;

function letöltés() {
        fetch('/questions.json')
            .then(response => response.json())
            .then(data => letöltésBefejeződött(data));

        function letöltésBefejeződött(d) {
            console.log("Sikeres letöltés!")
            console.log(d)
            kérdések = d;
            kérdésMegjelenítés(1);
            kérdésSzáma = 1;
      }
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = `<h2>${kérdések[kérdés].questionText}`;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép").innerHTML = `<img id="kép1" src="https://szoft1.comeback.hu/hajo/${kérdések[kérdés].image}">` 
}

function Vissza() {

    kérdésSzáma--;

    if (kérdésSzáma < 0) {
        kérdésSzáma = kérdések.length - 1;
    }
    kérdésMegjelenítés(kérdésSzáma);
    színezésOff();
}

function Előre() {

    kérdésSzáma++;

    if (kérdésSzáma >= kérdések.length) {
        kérdésSzáma = 0;        
    }
    kérdésMegjelenítés(kérdésSzáma);
    színezésOff();
}

function Válasz1() {
    document.getElementById("válasz1").style.backgroundColor = "red";
    document.getElementById(`válasz${kérdések[kérdésSzáma].correctAnswer}`).style.backgroundColor = "green";
}

function Válasz2() {
    document.getElementById("válasz2").style.backgroundColor = "red";  
    document.getElementById(`válasz${kérdések[kérdésSzáma].correctAnswer}`).style.backgroundColor = "green";
}

function Válasz3() {
    document.getElementById("válasz3").style.backgroundColor = "red";
    document.getElementById(`válasz${kérdések[kérdésSzáma].correctAnswer}`).style.backgroundColor = "green";
}

function színezésOff() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById(`válasz${i}`).style.backgroundColor = "antiquewhite";
    }
}