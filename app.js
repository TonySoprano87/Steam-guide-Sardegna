// ===============================
// Steam Guide Sardegna
// Versione 3.0
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    mostraData();
    caricaMeteo();
    aggiornaStorico();
    inizializzaChecklist();

});

// -------------------------------
// Data
// -------------------------------

function mostraData() {

    const today = document.getElementById("today");

    if (!today) return;

    today.textContent = new Date().toLocaleDateString("it-IT", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

}

// -------------------------------
// METEO REALE
// Cabras (Mare Morto)
// -------------------------------

async function caricaMeteo() {

    try {

        const url =
        "https://api.open-meteo.com/v1/forecast?latitude=39.93&longitude=8.44&current=temperature_2m,wind_speed_10m";

        const risposta = await fetch(url);

        const dati = await risposta.json();

        const vento = Math.round(dati.current.wind_speed_10m);

        const temperatura = Math.round(dati.current.temperature_2m);

        // Altezza onda simulata
        // (verrà sostituita nella prossima versione con dati marini real