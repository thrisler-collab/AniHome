const r_imgurl = document.getElementById('imgUrl');
const r_imgupload = document.getElementById('imgUpload');
const l_imgurl = document.getElementById('limgurl');
const l_imgupload =document.getElementById('limgupload');

const enterUrl = document.getElementById('inputurl');
const enterImg = document.getElementById('inputfile');

const finish = document.getElementById('send');

//https://soruly.github.io/trace.moe-api/#/docs

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
    const imgurltxt = document.getElementById('urltxt').value;
    var bnurl = `https://api.trace.moe/search?&url=${encodeURIComponent(imgurltxt)}`
    console.log(imgurltxt)
    bild.src = imgurltxt;
    fetch("https://api.trace.moe/search?anilistInfo&url=" + imgurltxt, {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            const results = data.result;
            const de = data.result[0].anilist.title
            anime.innerHTML = de.romaji;
            animenative.innerHTML = de.native;
            adult.innerHTML = de.isAdult;
            episode.innerHTML = results.episode;
            english.innerHTML = de.english;
            synonyms.innerHTML = de.synonyms;

            var prozent = results.similarity * 100;
            var p1 = prozent.toFixed(2);
            treffsicherheit.innerHTML = p1 + "%";
            console.log(data);

        })
};

function apiimg(){
 const finput = document.getElementById('formFile');
 var bild1;
 bild1 = URL.createObjectURL(finput.files[0]);
 console.log(bild1);
 bild.src = bild1;

    fetch("https://api.trace.moe/search?anilistInfo&url=" + bild1, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
            const results = data.result;
            const de = data.result[0].anilist.title
            anime.innerHTML = de.romaji;
            animenative.innerHTML = de.native;
            adult.innerHTML = de.isAdult;
            episode.innerHTML = results.episode;
            english.innerHTML = de.english;
            synonyms.innerHTML = de.synonyms;

            var prozent = results.similarity * 100;
            var p1 = prozent.toFixed(2);
            treffsicherheit.innerHTML = p1 + "%";
            console.log(data);

        })
};