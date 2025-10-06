let nameInput = document.getElementById("nom");
let submitButton = document.getElementById("valider");
let messageDiv = document.getElementById("message");

submitButton.addEventListener("click", function() {
    let userName = nameInput.value;
    if (userName != "") {
        messageDiv.innerText = "Bonjour " + userName + "!";
        console.log("Bonjour " + userName + "!");
    } else {
        messageDiv.innerText = "Veuillez entrer votre nom.";
    }
    
});