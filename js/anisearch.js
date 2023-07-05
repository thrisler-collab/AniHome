const r_imgurl = document.getElementById('imgUrl');
const r_imgupload = document.getElementById('imgUpload');
const l_imgurl = document.getElementById('limgurl');
const l_imgupload =document.getElementById('limgupload');

const enterUrl = document.getElementById('inputurl');
const enterImg = document.getElementById('inputfile');

const finish = document.getElementById('send');

const loadingimg = document.getElementById('loading');
const ergebnis = document.getElementById('res')

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
            alert("Error:", error);
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
            alert("Fehler beim Hochladen des Bildes:", error);
            loadingimg.style.visibility = 'hidden';
        });
}