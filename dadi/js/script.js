var giocatore1 = prompt("Inserisci nome Giocatore 1");
var giocatore2 = prompt("Inserisci nome Giocatore 2 o premi invio per giocare con l'IA");
var output = document.getElementById('win');
var numberG = [0,0];
var number= 0;

if(giocatore1.length==0){
    giocatore1 = "Giocatore misterioso";
}

if(giocatore2.length==0){
    giocatore2= "IA";
}


for (var i = 0; i < 2; i++) {
    var number = Math.random() * (6 - 1) + 1;
     numberG[i]= number.toFixed(0);
}

if(numberG[0]>numberG[1]){
    var winner = giocatore1;
} else {
    if(numberG[0]<numberG[1]){
        var winner = giocatore2;
    } else {
        var winner = "nessuno! Parità"
    }
}

output.innerHTML = "Il vincitore è : " + winner;
