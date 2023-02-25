var proton = document.querySelector("#proton .Balle");
var neutron = document.querySelector("#neutron .Balle");
var electron = document.querySelector("#electron .Balle");
var protonMoins = document.querySelector("#proton .Balle2");
var neutronMoins = document.querySelector("#neutron .Balle2");
var electronMoins = document.querySelector("#electron .Balle2");
var images = document.querySelector(".element");
var protons = [];
var neutrons = [];
var electrons = [];
var schema = [
    [17, 16, 15, 14, 13],
    [18, 5, 4, 3, 12],
    [19, 6, 1, 2, 11],
    [20, 7, 8, 9, 10],
    [21, 22, 23, 24, 25]
]
var image = document.querySelector(".element");
var x = 300;
var y = 300;
var mul = 1;
var dia = 10;
var angle = 0;
var enleverNeutron = 0;
proton.addEventListener('click', () => {
    var compteur = protons.length + neutrons.length;
    if (protons.length <= electrons.length) {
        make(compteur);
        protons.push(new Balle(x, y, 'red'));
    }else{
        alert("Vous avez plus de proton que d'électron !\n il faut que le nombre d'électrons soit égal au nombre de protons!");
    }
}
);
var milieux = 2;
var milieuy = 2;
function make(compteur) {
    if (compteur + 1 == schema[milieux - 1][milieuy]) {
        haut();
        milieux -= 1;
    }
    if (compteur + 1 == schema[milieux + 1][milieuy]) {
        bas();
        milieux += 1;
    }
    if (compteur + 1 == schema[milieux][milieuy - 1]) {
        gauche();
        milieuy -= 1;
    } if (compteur + 1 == schema[milieux][milieuy + 1]) {
        droit();
        milieuy += 1;
    }
}
neutron.addEventListener('click', () => {
    var compteur = neutrons.length + protons.length;
    if (neutrons.length < 3) {
        make(compteur);
        neutrons.push(new Balle(x, y, 'grey'));
    }else{
        alert("cette atome ne peut pas avoir plus de "+neutrons.length+" neutrons!");
        
    }
})

electron.addEventListener('click', () => {
    if (protons.length >= electrons.length) {
        if (random(0, 1) < 0.5) {
            electrons.push(new Balle(random(0, 200), random(200, 600), 'blue'))
        } else {
            electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
        }
    }else{
        alert("Vous avez plus d'electron que de proton !\n il faut que le nombre d'électrons soit égal au nombre de protons!");
    }
})


function setup() {
    var canvas = createCanvas(600, 600);
    canvas.class("center");
    protons.push(new Balle(x, y, 'red'));
    if (random(0, 1) < 0.5) {
        electrons.push(new Balle(random(0, 200), random(200, 600), 'blue'))
    } else {
        electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
    }
    var name = "<img src='./imageAtome/protium.png' alt='protium'>";
    images.innerHTML += name;

}
function droit() {
    x += dia;
}
function gauche() {
    x -= dia;
}
function haut() {
    y -= dia;
}
function bas() {
    y += dia;
}
function draw() {
    background(255);
    ellipseMode(CENTER);
    fill(255, 255, 255)
    ellipse(300, 300, 200, 200);
    for (var i = 0; i < protons.length; i++) {
        protons[i].display();

    }
    for (var i = 0; i < neutrons.length; i++) {
        neutrons[i].display();

    }
    for (var i = 0; i < electrons.length; i++) {
        electrons[i].display();
        electrons[i].move();
    }
    check();


}
function check() {
    images = document.querySelector(".element img");
    if (protons.length == electrons.length) {
        if(protons.length == 1 && neutrons.length == 0){
            images.src = "./imageAtome/protium.png"
        }
        if (protons.length == 1 && neutrons.length == 1) {
            images.src = "./imageAtome/Deuterium.png"
        }
        if (protons.length == 1 && neutrons.length == 2) {
            images.src = "./imageAtome/Tritium.png"
        }
    }
}
protonMoins.addEventListener('click', () => {
    if (protons.length >= electrons.length) {
        protons.length -= 1;
    }
})
neutronMoins.addEventListener('click', () => {
    if (neutrons.length>0) {
        neutrons.length -= 1;
    }else{
        alert("Vous avez 0 neutrons!");
    }
})