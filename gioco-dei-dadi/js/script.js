// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Seleziono il button
const button = document.getElementById('my-button');
// Al click del button
button.addEventListener('click',
    function() {
        // Numero random dell'utente e lo stampo nel DOM
        const userNumberRandom = Math.floor(Math.random() * 6) + 1;
        document.getElementById('user-number').innerHTML = `USER-NUMBER: [${userNumberRandom}]`;
        
        // Numero random computer e lo stampo nel DOM
        const computerNumberRandom = Math.floor(Math.random() * 6) + 1;
        document.getElementById('computer-number').innerHTML = `COMPUTER-NUMBER: [${computerNumberRandom}]`;

        // Confronto tra i 2 numeri e stampo il vincitore nel DOM
        if (userNumberRandom > computerNumberRandom) {
            document.getElementById('winner-number').innerHTML = 'Hai vinto!!!';
        } else if (userNumberRandom < computerNumberRandom) {
            document.getElementById('winner-number').innerHTML = 'Hai perso :(';
        } else if (userNumberRandom === computerNumberRandom) {
            document.getElementById('winner-number').innerHTML = 'Pareggio :|';
        }
    }
)