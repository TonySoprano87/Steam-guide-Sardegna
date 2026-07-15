document.addEventListener("DOMContentLoaded", () => {

    // Data
    const oggi = new Date();

    const today = document.getElementById("today");
    if (today) {
        today.textContent = oggi.toLocaleDateString("it-IT", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    // Meteo (provvisorio)
    const meteo = {
        vento: 8,
        mare: 0.2,
        temperatura: 27
    };

    const vento = document.getElementById("vento");
    const mare = document.getElementById("mare");
    const temperatura = document.getElementById("temperatura");
    const stato = document.getElementById("stato");

    if (vento) vento.textContent = meteo.vento + " km/h";
    if (mare) mare.textContent = meteo.mare + " m";
    if (temperatura) temperatura.textContent = meteo.temperatura + " °C";

    if (stato) {

        if (meteo.vento <= 10 && meteo.mare <= 0.30) {
            stato.textContent = "🟢 USCITA CONSIGLIATA";
        } else if (meteo.vento <= 15 && meteo.mare <= 0.50) {
            stato.textContent = "🟡 USCIRE CON PRUDENZA";
        } else {
            stato.textContent = "🔴 USCITA SCONSIGLIATA";
        }

    }

    // CHECKLIST PERSISTENTE

    const checks = document.querySelectorAll('input[type="checkbox"]');

    checks.forEach((box, index) => {

        const key = "check_" + index;

        box.checked = localStorage.getItem(key) === "true";

        box.addEventListener("change", () => {
            localStorage.setItem(key, box.checked);
        });

    });

});