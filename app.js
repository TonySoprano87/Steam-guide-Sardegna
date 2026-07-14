document.addEventListener("DOMContentLoaded", function () {

    // DATA

    const today = document.getElementById("today");

    if(today){

        const data = new Date();

        today.innerHTML = data.toLocaleDateString("it-IT",{
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        });

    }

    // VALORI DEMO
    // Successivamente verranno letti dal meteo reale

    aggiornaSemaforo(8,0.25);

});


function aggiornaSemaforo(vento,onda){

    const ventoBox=document.getElementById("vento");
    const ondaBox=document.getElementById("onda");
    const stato=document.getElementById("stato");

    if(!ventoBox) return;

    ventoBox.innerHTML=vento+" km/h";

    ondaBox.innerHTML=onda.toFixed(1)+" m";

    if(vento<=10 && onda<=0.30){

        stato.innerHTML="🟢 USCITA CONSIGLIATA";
        stato.style.color="green";

    }

    else if(vento<=15 && onda<=0.50){

        stato.innerHTML="🟡 VALUTARE CON ATTENZIONE";
        stato.style.color="#c58b00";

    }

    else{

        stato.innerHTML="🔴 USCITA SCONSIGLIATA";
        stato.style.color="red";

    }

}
