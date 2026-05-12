let myImgs = [
    "Boot.jpg",
    "derSee.jpg",
    "Der_Steg.jpg",
    "dieRabe.png",
    "Die_Frau.jpg",
    "Die_Rune.jpg",
    "Eisvogel.jpg",
    "Fuchs&Löwe.jpg",
    "Schiff.jpg",
    "Segelboot.jpg",
    "SriLanka.jpg",
    "Winterfeld.jpg"];


function renderFotogram(){

    for (let i = 0; i < myImgs.length; i++) {
        console.log(i);
        document.getElementById('fotogram').innerHTML +=

        `<div class="pic">
            <img src="./assets/img/${myImgs[i]}" alt="">
        </div>`;
    }
}