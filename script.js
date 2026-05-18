let myImgs = [
    "Boot.jpg",
    "derSee.jpg",
    "Der_Steg.jpg",
    "derRabe.png",
    "Die_Frau.jpg",
    "Die_Rune.jpg",
    "Eisvogel.jpg",
    "Fuchs&Löwe.jpg",
    "Schiff.jpg",
    "Segelboot.jpg",
    "SriLanka.jpg",
    "Winterfeld.jpg"];

let myAlts = [
    "Ein idylischer, kleiner Hafen",
    "Ein See in der goldenen Stunde",
    "Ein Steg in North Carolina",
    "Düsterer Rabe",
    "Das Land der aufgehenden Sonne",
    "Die goldene Rune",
    "Ein Eisvogel auf dem Ast",
    "Fuchs und Löwe",
    "Ein Segelschiff auf See",
    "Ein Segelshiff in Pyrographie",
    "Ein Tag an Sri Lankas Küste",
    "Eine schneebedeckte Landschaft"
];

const dialogRef = document.getElementById('dialog');
let currentImg;
function renderFotogram() {

    for (let i = 0; i < myImgs.length; i++) {
        console.log(i);
        document.getElementById('fotogram').innerHTML +=

            `<div class="pic">
            <img src="./assets/img/${myImgs[i]}" alt="${myAlts[i]}" class="pic"; onclick ="openDialog (${i})">
        </div>`;
    }
}


function openDialog(i) {
    currentImg = i;
    dialogRef.innerHTML =
        `
       <header>
            <h3 class="header_dialog" >${myAlts[i]}<img onclick="closeDialog()" class="x_button" src="./assets/icon/Property 1=Default.svg" alt=""></h3>
            </header>
         <section class ="section_dialog">
          <img class="dialog_img" src="./assets/img/${myImgs[i]}" alt="${myAlts[i]}">
        </section>
         <footer class="dialog_style">
         <div class ="button_style">
        <img class="arrow" onclick="leftButton()"src="./assets/icon/Arrow-left(1).svg" alt="">
        </div>
        <p id="imgsCounter">${currentImg + 1}/${myImgs.length}</p>
        <div class ="button_style">
         <img class="arrow" onclick="rightButton()"src="./assets/icon/Arrow-Right.svg" alt="">
         </div>
         </footer>`

    dialogRef.showModal();

}

function closeDialog() {
    dialogRef.close();
}

function leftButton() {

    currentImg--;

    if (currentImg < 0) {
        currentImg = 11;
    }

    openDialog(currentImg);
}

function rightButton() {
    currentImg++;
    if (currentImg >= myImgs.length) {
        currentImg = 0;
    }
    openDialog(currentImg);
}