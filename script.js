// Das ist der JS-Code, der die Interaktivität der Website ermöglicht

// Das ist eine Funktion, die überprüft, ob die Eingaben des Benutzers gültig sind
function validateForm() {
    // Das sind die Variablen, die die Eingaben des Benutzers speichern
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Das ist die Variable, die die Fehlermeldung speichert
    var message = "";

    // Das ist die Bedingung, die überprüft, ob der Benutzername leer ist
    if (username == "") {
        message += "Bitte geben Sie einen Benutzernamen ein.\n";
    }

    // Das ist die Bedingung, die überprüft, ob das Passwort leer ist
    if (password == "") {
        message += "Bitte geben Sie ein Passwort ein.\n";
    }

    // Das ist die Bedingung, die überprüft, ob die E-Mail leer ist
    if (email == "") {
        message += "Bitte geben Sie eine E-Mail ein.\n";
    }

    // Das ist die Bedingung, die überprüft, ob die E-Mail gültig ist
    if (email != "" && !email.includes("@")) {
        message += "Bitte geben Sie eine gültige E-Mail ein.\n";
    }

    // Das ist die Bedingung, die überprüft, ob es eine Fehlermeldung gibt
    if (message != "") {
        // Das ist der Befehl, der die Fehlermeldung anzeigt
        alert(message);
        // Das ist der Befehl, der verhindert, dass das Formular abgeschickt wird
        return false;
    }
}
