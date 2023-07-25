//window.history.replaceState({}, document.title, '/');
document.getElementById("info").style.visibility = 'hidden'
var spr = navigator.language
if (!spr === 'de-DE') {
    en()
    if (!spr === 'en-US' && !spr === 'en-UK'){
        document.getElementById("info").style.visibility = 'visible'
    }
}

sic();

document.getElementById("okbtn").addEventListener('click', () =>{
    document.getElementById("info").style.visibility = 'hidden'
})


window.addEventListener("resize", (event) => {
   sic();
});

function en() {
    document.getElementById("headertext").innerHTML = "Your AniPicture Library";
    document.getElementById("bieten").innerHTML = "What we offer you";
    document.getElementById("c1").innerHTML = "We offer you a lot of anime content that you will surely like. Among the various categories you will also find the right thing."
    document.getElementById("c2").innerHTML = "Simply choose one and let yourself be surprised. Whether for inspiration for your new project or content. We make it easy for you to find the right image."
    document.getElementById("beachte").innerHTML = "Please Note"
    document.getElementById("c3").innerHTML = "The copyright still belongs to the artists themselves before you publish or use them again. make sure you own the rights!"
    document.getElementById("wahl").innerHTML = "Select to continue:"
    document.getElementById("b1").innerHTML = "[ Neko and other ]"
    document.getElementById("42").innerHTML = "For those who do not know some categories, a short explanation"
    document.getElementById("43").innerHTML = "Category"
    document.getElementById("44").innerHTML = "Description"
    document.getElementById("45").innerHTML = "May contain NSFW content"
    document.getElementById("46").innerHTML = "In anime, the term \"husbando\" is used to refer to a male character whom a person admires or considers an ideal partner. that a person admires, worships or considers an ideal partner."
    document.getElementById("47").innerHTML = "In the anime scene, \"kitsune\" stands for a fox and refers to the mythological figure of the fox in Japanese folklore. Kitsune are often depicted as intelligent and magical creatures and magical beings that can take on human form."
    document.getElementById("48").innerHTML = "In the anime scene, \"neko\" stands for a cat and refers to characters who have cat-like features or characteristics. characteristics or traits. This can refer to physical features such as cat ears and a cat tail, but also to behavioural or personality a cat's tail, but also to behaviours or personality traits associated with cats. associated with cats."
    document.getElementById("49").innerHTML = "In the anime scene, the term \"waifu\" is used to describe a female character, whom a person admires, worships or considers an ideal partner."
    document.getElementById("50").innerHTML = "In the anime scene, \"CatBoy\" stands for a male character who exhibits cat-like characteristics or characteristics, similar to a neko, but with a masculine expression."
    document.getElementById("lan").innerHTML = "Your Language: " + spr + " is aktually not supported on our site. We switched to the english version instead"

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
        document.getElementById("backgr").src = "src/m1.jpg"
        console.log("zugasd")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg1.jpg"
    }
}

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Sw regestriert");
        console.log(registration)
    }).catch(error =>{
        console.error("Fehler bei der Regestrierung")
        console.error(error)
    })
}else {
    console.error("Application wird nicht von deinem Browser unterstützt")
}
