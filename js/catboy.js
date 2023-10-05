//window.history.replaceState({}, document.title, '/');
var spr = navigator.language
if (!spr === 'de-DE') {
    en()
}
window.addEventListener("resize", (event) => {
    sic();
});

const fullTitle = "AniList"; // Der vollständige Titel
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

const enterid = document.getElementById("idnumber");
const radiosucheid = document.getElementById("sucheid");
document.getElementById("sucheidl").addEventListener("click", () => {
    radiosucheid.click()
    enterid.disabled = false;
    enterid.placeholder = "ID-Nummer";
});
const radiozufaellig = document.getElementById("zufaellig");
document.getElementById("zufaelligl").addEventListener("click", () => {
    radiozufaellig.click();
    enterid.value = ""
    enterid.disabled = true;
    enterid.placeholder = "Not available!";

})
radiosucheid.click()
radiosucheid.addEventListener("click", () => {
    enterid.disabled = false;
    enterid.placeholder = "ID-Nummer";
});
radiozufaellig.addEventListener("click", () => {
    enterid.value = ""
    enterid.disabled = true;

    enterid.placeholder = "Not available!";

});

const loading = document.getElementById("loading");
loading.style.visibility = "hidden";

document.getElementById("rl").addEventListener("click", () => {
    if (radiosucheid.checked){
        const sid = document.getElementById("idnumber").value
        getanime(sid);
    }
    if (radiozufaellig.checked){
        var ranid = Math.floor(Math.random() * 999) + 1;
        getanime(ranid);
    }
})

function getanime(id){
   loading.style.visibility = "visible";
    document.getElementById("youtube").style.visibility = "visible"
    fetch('https://api.jikan.moe/v4/anime/' + id, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((dataa) => {
            console.log(dataa);
            console.log(dataa.data.trailer.embed_url)
            document.getElementById("titeljp").innerHTML = dataa.data.title_japanese;
            document.getElementById("titelen").innerHTML = dataa.data.title_english;
            document.getElementById("episodes").innerHTML = dataa.data.episodes;
            document.getElementById("producer").innerHTML = dataa.data.producers[0].name
            document.getElementById("desc").innerHTML = dataa.data.synopsis
            document.getElementById("youtube").src = dataa.data.trailer.embed_url
            document.getElementById("cover").src = dataa.data.images.jpg.image_url;
            if (dataa.data.trailer.embed_url === null){
                document.getElementById("youtube").style.visibility = "hidden"
            }
            loading.style.visibility = 'hidden';
        })
        .catch((error) => {
            console.log(error)
        });

}






function en(){
    document.getElementById("20").innerHTML = "Your AniPicture Library";
    document.getElementById("21").innerHTML = "No input is required on this page!"
    document.getElementById("rl").innerHTML = "Next Image"

    document.getElementById("001").innerHTML = "Request"
    document.getElementById("002").innerHTML = "For enquiries we are at your disposal under:"
    document.getElementById("003").innerHTML = "This website is operated by:"
    document.getElementById("004").innerHTML = "&copy; Thrisler 2023. All rights reserved. Version 1.1"
    document.getElementById("005").innerHTML = "More Links & Social Media"
    document.getElementById("006").innerHTML = "Follow the developer of the site and find more links:"
    document.getElementById("007").innerHTML = "More from the developer"
}
function sic(){
    if (window.innerWidth < 800){
        document.getElementById("backgr").src = "src/m3.jpg"
        console.log("zugasd")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg3.png"
    }
}

