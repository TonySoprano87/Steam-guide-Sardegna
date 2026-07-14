document.addEventListener("DOMContentLoaded", function () {

    const oggi = new Date();

    document.getElementById("today").innerHTML =
        oggi.toLocaleDateString("it-IT", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

});