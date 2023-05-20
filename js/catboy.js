
loadcatboy();
document.querySelector('#rl').addEventListener(('click'), () => {
  loadcatboy();
})
function loadcatboy(){
    fetch('https://api.catboys.com/img')
        .then((response) => response.json())
        .then((data) => {
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
        })

    fetch('https://api.catboys.com/catboy')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('#says').innerHTML = data.response;
        })



}
