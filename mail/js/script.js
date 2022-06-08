// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Lista delle email
const emailList = ['pippo@email.com', 'papera@email.com', 'mouse@email.com', 'rambo@email.com', 'tarzan@email.com'];

// Seleziono il button
const submitButton = document.getElementById('submit-btn');
// Al click del button
submitButton.addEventListener('click', 
    function() {
        // Chiedo all'utente la sua email
        const userEmail = document.getElementById('user-email').value;

        let emailFound = false;
        // Controllo se l'email dell'utente è presente nella lista
        for(i = 0; i < emailList.length; i++) {
            const email = emailList[i];

            if (userEmail === email) {
                emailFound = true;
            }
        }

        // Se emailFound === true allora dico all'utente che la sua email è nella lista
        // altrimenti dico all'utente che la sua email non è nella lista
        if (emailFound === true) {
            document.getElementById('user-message').innerHTML = 'La tua email è presente nella lista';
        } else {
            document.getElementById('user-message').innerHTML = 'La tua email non è presente nella lista';
        }
    }
)




