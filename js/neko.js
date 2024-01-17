//window.history.replaceState({}, document.title, '/');
var spr = navigator.language
if (!spr === 'de-DE') {
    en()
}

const fullTitle = "Neko"; // Der vollständige Titel
let currentTitle = "AniHome ●"; // Der aktuelle Titel, der sich schrittweise ergänzt
let titleIndex = 0; // Der Index des nächsten Buchstabens, der hinzugefügt wird

// Funktion, um den Titel schrittweise zu ergänzen
function animateTitle() {
    if (titleIndex <= fullTitle.length) {
        currentTitle = fullTitle.slice(0, titleIndex);
        document.title ="AniHome ● " + currentTitle;
        titleIndex++;
        setTimeout(animateTitle, 300); // Warte 200 Millisekunden, bevor der nächste Buchstabe hinzugefügt wird
    }
}
// Starte die Animation, sobald die Seite geladen ist
window.addEventListener('load', animateTitle);
window.addEventListener("resize", (event) => {
    sic();
});
var categorie = document.querySelector('#select-categorie').value;
const load = document.getElementById('loading');

load.style.visibility = 'hidden';
document.querySelector('#dlbtn').disabled = true;
if (categorie === "Auswahl"){
    console.log("test")
    document.querySelector('#send').disabled = true;
}
document.querySelector('#select-categorie').addEventListener('change', () => {
    var x = document.querySelector('#select-categorie').value;
    if (x === "Auswahl"){
        document.querySelector('#send').disabled = true;
    } else {
        document.querySelector('#send').disabled = false;
    }
});
document.querySelector('#send').addEventListener('click', () => {
    load.style.visibility = 'visible';
    document.querySelector('#dlbtn').disabled = false;
    const selected = document.querySelector('#select-categorie').value;
        fetch('https://nekos.best/api/v2/' + selected)
            .then((response) => response.json())
            .then((data) => {
                const results = data.results[0];
                console.log(data);
                console.log(results);
                document.querySelector('#head').innerHTML = results.artist_name;
                document.querySelector('#head').href = results.artist_href;
                document.querySelector('#imgresults').src = results.url;
                document.querySelector('#download').href= results.url;
                load.style.visibility = 'hidden';
            })
});


function en(){
    document.getElementById("30").innerHTML = "Your AniPicture Library"
    document.getElementById("31").innerHTML = "Choose your category"
    document.getElementById("32").innerHTML = "Selection"
    document.getElementById("send").innerHTML = "Confirm";

    document.getElementById("001").innerHTML = "Request"
    document.getElementById("002").innerHTML = "For enquiries we are at your disposal under:"
    document.getElementById("003").innerHTML = "This website is operated by:"
    document.getElementById("004").innerHTML = "&copy; Thrisler 2023. All rights reserved. Version 1.1"
    document.getElementById("005"). innerHTML = "More Links & Social Media"
    document.getElementById("006").innerHTML = "Follow the developer of the site and find more links:"
    document.getElementById("007").innerHTML = "More from the developer"
}

function sic(){
    if (window.innerWidth < 800){
        document.getElementById("backgr").src = "src/m4.jpg"
        console.log("zugasd")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg4.png"
    }
}