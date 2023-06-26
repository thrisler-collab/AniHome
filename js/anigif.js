
const r_sfw = document.getElementById('sfw');
const r_nsfw = document.getElementById('nsfw');
const l_sfw = document.getElementById('lsfw');
const l_nsfw = document.getElementById('lnsfw');
const selectcat = document.getElementById('select-categorie-gif');

//https://www.npmjs.com/package/anime-images-api?activeTab=readme

r_sfw.addEventListener('click', () => {
    selectcat.innerHTML = "";
    selectcat.innerHTML ="<option>Hug</option>\n" +
        "      <option>Kiss</option>\n" +
        "      <option>Slap</option>\n" +
        "      <option>Punch</option>\n" +
        "      <option>Wink</option>\n" +
        "      <option>Pat</option>\n" +
        "      <option>Kill</option>\n" +
        "      <option>Cuddle</option>\n" +
        "      <option>Wafiu</option>";
});

r_nsfw.addEventListener('click', () => {
   selectcat.innerHTML = "";
   selectcat.innerHTML = " <option>Hentai</option>\n" +
       "      <option>Boobs</option>\n" +
       "      <option>Lesbian</option>";
});

l_sfw.addEventListener('click', () =>{
    r_sfw.click();
});

l_nsfw.addEventListener('click', () =>{
    r_nsfw.click();
});

function loadIMG(){
    var val = selectcat.value

    if(val === "Hug"){

    }
    if (val === "Kiss"){

    }
    if (val === "Slap"){

    }
    if (val === "Punch"){

    }
    if (val === "Wink"){

    }
    if (val === "Pat"){

    }
    if (val === "Kill"){

    }
    if (val === "Cuddle"){

    }
    if (val=== "Waifu"){

    }


}


r_sfw.click();


