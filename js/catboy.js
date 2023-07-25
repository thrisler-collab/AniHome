//window.history.replaceState({}, document.title, '/');
var spr = navigator.language
if (!spr === 'de-DE') {
    en()
}
window.addEventListener("resize", (event) => {
    sic();
});

const load = document.getElementById('loading');

load.style.visibility = 'hidden';
loadcatboy();
document.querySelector('#rl').addEventListener(('click'), () => {
  loadcatboy();
})
function loadcatboy(){
    fetch('https://api.catboys.com/img')
        .then((response) => response.json())
        .then((data) => {
            load.style.visibility = 'visible';
            console.log(data);
            document.querySelector('#head').innerHTML = data.artist;
            document.querySelector('#head').href = data.artist_url;
            document.querySelector('#imgresults').src = data.url;
            document.querySelector('#download').href= data.url;
            if (data.artist === 'unknown'){
                console.log("nn")
                document.querySelector('#head').innerHTML = "Unbekannt";
                document.querySelector('#head').href = "";
                document.querySelector('#head').target = "";
            }
            load.style.visibility = 'hidden';
        })

    fetch('https://api.catboys.com/catboy')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('#says').innerHTML = data.response;
            load.style.visibility = 'visible';
            console.log("test")
        })



}


function en(){
    document.getElementById("20").innerHTML = "Your AniPicture Library";
    document.getElementById("21").innerHTML = "No input is required on this page!"
    document.getElementById("rl").innerHTML = "Next Image"

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
        document.getElementById("backgr").src = "src/m3.jpg"
        console.log("zugasd")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg3.png"
    }
}

