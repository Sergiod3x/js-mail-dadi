var iscritti = ['guccini@gmail.com', 'franco_battiato@gmail.com', 'lucio_dalla@gmail.com', 'faber@gmail.com', 'giorgio_gaber@gmail.com', 'paolo_conte@gmail.com',];
var mail = prompt("Inserisci la tua E-mail");
var output = document.getElementById('iscritti');

// esiste la mail nell'array?

var check = false; // deve diventare true solo se trovo la mail corrispondente.

for (var i = 0; i < iscritti.length; i++) {
    if (iscritti[i] === mail) {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check) {
    output.innerHTML = 'La mail è presente nel database. Accesso effettuato';
} else {
    output.innerHTML = 'La mail non è presente nel database. Accesso negato';
}