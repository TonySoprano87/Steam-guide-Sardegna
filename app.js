document.addEventListener("DOMContentLoaded", () => {

    aggiornaStorico();

});

function salvaUscita(){

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

    aggiornaStorico();

}

function aggiornaStorico(){

    const box = document.getElementById("storico");

    if(!box) return;

    let elenco = JSON.parse(localStorage.getItem("uscite")) || [];

    if(elenco.length===0){

        box.innerHTML="<p>Nessuna uscita registrata.</p>";

        return;

    }

    box.innerHTML="";

    elenco.forEach(u=>{

        box.innerHTML += `

        <div class="card">

        <h3>${u.luogo}</h3>

        <p>📅 ${u.data}</p>

        <p>📏 ${u.distanza}</p>

        <p>⏱ ${u.durata}</p>

        <p>${u.note}</p>

        </div><br>

        `;

    });

}