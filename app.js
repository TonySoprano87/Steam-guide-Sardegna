document.addEventListener("DOMContentLoaded", () => {

    mostraData();
    aggiornaMeteo();
    aggiornaStorico();
    inizializzaChecklist();

});

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

function aggiornaMeteo() {

    const meteo = {
        vento: 8,
        mare: 0.2,
        temperatura: 27
    };

    if (document.getElementById("vento"))
        document.getElementById("vento").textContent = meteo.vento + " km/h";

    if (document.getElementById("mare"))
        document.getElementById("mare").textContent = meteo.mare + " m";

    if (document.getElementById("temperatura"))
        document.getElementById("temperatura").textContent = meteo.temperatura + " °C";

    const stato = document.getElementById("stato");

    if (!stato) return;

    if (meteo.vento <= 10 && meteo.mare <= 0.30) {

        stato.textContent = "🟢 USCITA CONSIGLIATA";

    } else if (meteo.vento <= 15 && meteo.mare <= 0.50) {

        stato.textContent = "🟡 USCIRE CON PRUDENZA";

    } else {

        stato.textContent = "🔴 USCITA SCONSIGLIATA";

    }

}

function inizializzaChecklist() {

    const checks = document.querySelectorAll('input[type="checkbox"]');

    checks.forEach((box, i) => {

        const key = "check_" + i;

        box.checked = localStorage.getItem(key) === "true";

        box.addEventListener("change", () => {

            localStorage.setItem(key, box.checked);

        });

    });

}

function salvaUscita() {

    const uscita = {

        luogo: document.getElementById("luogo").value,
        data: document.getElementById("data").value,
        distanza: document.getElementById("distanza").value,
        durata: document.getElementById("durata").value,
        note: document.getElementById("note").value

    };

    let elenco = JSON.parse(localStorage.getItem("uscite")) || [];

    elenco.unshift(uscita);

    localStorage.setItem("uscite", JSON.stringify(elenco));

    document.getElementById("luogo").value = "";
    document.getElementById("data").value = "";
    document.getElementById("distanza").value = "";
    document.getElementById("durata").value = "";
    document.getElementById("note").value = "";

    aggiornaStorico();

}

function eliminaUscita(index){

    let elenco = JSON.parse(localStorage.getItem("uscite")) || [];

    elenco.splice(index,1);

    localStorage.setItem("uscite",JSON.stringify(elenco));

    aggiornaStorico();

}

function aggiornaStorico() {

    const box = document.getElementById("storico");

    if (!box) return;

    let elenco = JSON.parse(localStorage.getItem("uscite")) || [];

    if (elenco.length === 0) {

        box.innerHTML = "<p>Nessuna uscita registrata.</p>";

        return;

    }

    box.innerHTML = "";

    elenco.forEach((u,index) => {

        box.innerHTML += `

<div class="card">

<h3>${u.luogo}</h3>

<p>📅 ${u.data}</p>

<p>📏 ${u.distanza}</p>

<p>⏱ ${u.durata}</p>

<p>${u.note}</p>

<button class="button" onclick="eliminaUscita(${index})">

🗑 Elimina

</button>

</div>

<br>

`;

    });

}