document.addEventListener("DOMContentLoaded", () => {

    const oggi = new Date();

    const data = document.getElementById("today");

    if (data) {

        data.textContent = oggi.toLocaleDateString("it-IT", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    }

    const stato = document.getElementById("stato");

    if (stato) {

        const vento = 8;
        const onda = 0.20;

        if (vento <= 10 && onda <= 0.30) {

            stato.textContent = "🟢 USCITA CONSIGLIATA";

        } else if (vento <= 15 && onda <= 0.50) {

            stato.textContent = "🟡 ATTENZIONE";

        } else {

            stato.textContent = "🔴 MEGLIO RIMANDARE";

        }

    }

});