var categorie = document.querySelector('#select-categorie').value;
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
            })
});