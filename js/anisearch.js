//window.history.replaceState({}, document.title, '/');
var spr = navigator.language
if (!spr === 'de-DE') {
    en()
}

sic()
window.addEventListener("resize", (event) => {
    sic();
});
const r_imgurl = document.getElementById('imgUrl');
const r_imgupload = document.getElementById('imgUpload');
const l_imgurl = document.getElementById('limgurl');
const l_imgupload =document.getElementById('limgupload');

const enterUrl = document.getElementById('inputurl');
const enterImg = document.getElementById('inputfile');

const finish = document.getElementById('send');

const loadingimg = document.getElementById('loading');
const ergebnis = document.getElementById('res')

const errormsg = document.getElementById('errorbox');
const errbtn = document.getElementById('okbtn');

errbtn.addEventListener('click', () => {
    errormsg.style.visibility = 'hidden';
});

errormsg.style.visibility = 'hidden'
loadingimg.style.visibility = 'hidden'
//ergebnis.style.visibility = 'hidden'

r_imgurl.addEventListener('click', () =>{
    enterUrl.style.display='flex';
    enterImg.style.display='none';
});

r_imgupload.addEventListener('click', () =>{
    enterUrl.style.display='none';
    enterImg.style.display='flex';
});

l_imgurl.addEventListener('click', () => {
   r_imgurl.click();
});

l_imgupload.addEventListener('click', () => {
    r_imgupload.click();
});

r_imgurl.click();

finish.addEventListener('click', () => {
    if (r_imgurl.checked){
       apiurl();
    }
    if (r_imgupload.checked){
       apiimg();
    }
});

const fullTitle = "AniFind"; // Der vollständige Titel
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

const anime = document.getElementById('anime');
const animenative = document.getElementById('animenative');
const adult = document.getElementById('adult');
const episode = document.getElementById('episode');
const english = document.getElementById('english');
const synonyms = document.getElementById('synonyms');
const treffsicherheit = document.getElementById('treffsicherheit');

const bild = document.getElementById('imgresults');
function apiurl() {
    ergebnis.style.visibility = 'visible'
    loadingimg.style.visibility = 'visible';
    const imgurltxt = document.getElementById('urltxt').value;
    var bnurl = `https://api.trace.moe/search?&url=${encodeURIComponent(imgurltxt)}`
    console.log(imgurltxt)
    bild.src = imgurltxt;
    fetch("https://api.trace.moe/search?anilistInfo&url=" + imgurltxt, {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            const results = data.result[0];
            const de = data.result[0].anilist.title
            const de1 = data.result[0].anilist
            anime.innerHTML = de.romaji;
            animenative.innerHTML = de.native;
            adult.innerHTML = de1.isAdult;
            episode.innerHTML = results.episode;
            english.innerHTML = de.english;
            synonyms.innerHTML = de1.synonyms;
            if (de1.isAdult === true){
                adult.innerHTML = "Ja";
            }
            if (de1.isAdult === false){
                adult.innerHTML = "Nein";
            }
            if (de.english === null){
                english.innerHTML = "-"
            }
            var prozent = results.similarity * 100;
            var p1 = prozent.toFixed(2);
            treffsicherheit.innerHTML = p1 + "%";
            loadingimg.style.visibility = 'hidden';
            console.log(data);
        })
        .catch(error => {
            loadingimg.style.visibility = 'hidden';
            errormsg.style.visibility = 'visible';
        });
}

function apiimg(){
    ergebnis.style.visibility= 'visible'
    loadingimg.style.visibility = 'visible';
 const finput = document.getElementById('formFile');
    const file = finput.files[0];

    const formData = new FormData();
    formData.append("image", file);

    fetch("https://api.trace.moe/search?anilistInfo", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            const results = data.result[0];
            const de = data.result[0].anilist.title
            const de1 = data.result[0].anilist
            anime.innerHTML = de.romaji;
            animenative.innerHTML = de.native;
            adult.innerHTML = de1.isAdult;
            episode.innerHTML = results.episode;
            english.innerHTML = de.english;
            synonyms.innerHTML = de1.synonyms;
            if (de1.isAdult === true){
                adult.innerHTML = "Ja";
            }
            if (de1.isAdult === false){
                adult.innerHTML = "Nein";
            }
            if (de.english === null){
                english.innerHTML = "-"
            }
            var prozent = results.similarity * 100;
            var p1 = prozent.toFixed(2);
            treffsicherheit.innerHTML = p1 + "%";
            const imgre = URL.createObjectURL(finput.files[0]);
            bild.src = imgre;
            loadingimg.style.visibility = 'hidden';
            console.log(data);
        })
        .catch(error => {
            loadingimg.style.visibility = 'hidden';
            errormsg.style.visibility = 'visible';
        });
}

function en(){
    document.getElementById("10").innerHTML = "This function is currently still in a beta phase!"
    document.getElementById("11").innerHTML = "Your AniPicture Library"
    document.getElementById("12").innerHTML = "Select file";
    document.getElementById("13").innerHTML = "Upload a screenshot of the series/episode";
    document.getElementById("send").innerHTML = "Confirm";
    document.getElementById("14").innerHTML = "<i class=\"fa-regular fa-circle-xmark\" style=\"color: #ff0000;\"></i> <strong>Error!</strong> <br> An error occurred during transmission"
    document.getElementById("15").innerHTML = "Result:"
    document.getElementById("16").innerHTML = "Synonyms:"
    document.getElementById("17").innerHTML = "Accuracy:"


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
        document.getElementById("backgr").src = "src/m2.jpg"
        console.log("zugasd")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg2.png"
    }
}