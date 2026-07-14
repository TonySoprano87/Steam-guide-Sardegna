// Steam Guide Sardegna
// Versione 0.1

document.addEventListener("DOMContentLoaded", () => {

    console.log("Steam Guide Sardegna avviata");

    const button = document.getElementById("startButton");

    if(button){

        button.addEventListener("click", () => {

            alert("La sezione Itinerari sarà disponibile nella prossima versione.");

        });

    }

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const dateElement = document.getElementById("today");

    if(dateElement){
        dateElement.innerHTML = today.toLocaleDateString("it-IT", options);
    }

});
