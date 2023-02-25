var proton = document.querySelector("#proton .Balle");
var neutron = document.querySelector("#neutron .Balle");
var electron = document.querySelector("#electron .Balle");
var images = document.querySelector(".element");
var protons = [];
var neutrons = [];
var electrons = [];
var image = document.querySelector(".element");
var x = 300;
var y = 300;
var mul = 1;
var dia = 10;
var angle = 0;
proton.addEventListener('click', ()=> {
    var compteur = protons.length+neutrons.length;
    if(protons.length<=electrons.length){
        make(compteur);
        protons.push(new Balle(x, y, 'red'));
    }
}
);
function make(compteur){
    if (compteur % 9 == 1) {
        droit();
    }
    if (compteur % 9 == 2) {
        haut();
    }
    if (compteur % 9 == 3) {
        gauche();
    }
    if (compteur % 9 == 4) {
        gauche();
    }
    if (compteur % 9 == 5) {
        bas();
    }
    if (compteur % 9 == 6) {
        bas();
    }
    if (compteur % 9 == 7) {
        droit();
    }
    if (compteur % 9 == 8) {
        droit();
    }
    if(compteur % 9 == 0){
        haut();
    }
}
neutron.addEventListener('click', () => {
    var compteur = neutrons.length+protons.length;
    if (neutrons.length < 3) {
        make(compteur);
        neutrons.push(new Balle(x, y, 'grey'));  
    }
})

electron.addEventListener('click', ()=>{
    if(protons.length>=electrons.length){
    if(random(0, 1)<0.5){
        electrons.push(new Balle(random(0, 200), random(0, 200), 'blue'))
    }else{
        electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
    }
}
})


function setup() {
    var canvas = createCanvas(600, 600);
    canvas.class("center");
    protons.push(new Balle(x, y, 'red'));
    if(random(0, 1)<0.5){
        electrons.push(new Balle(random(0, 200), random(0, 200), 'blue'))
    }else{
        electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
    }
    var name = "<img src='./atome/protium.png' alt='protium'>";
    images.innerHTML+=name;

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
    for(var i = 0; i<electrons.length; i++){
        electrons[i].display();
        electrons[i].move();
    }
    check();
    

}
function check(){
    images = document.querySelector(".element img");
    if(protons.length==electrons.length){
        if(protons.length==1 && neutrons.length==1){
            images.src="./atome/Deuterium.png"
        }
        if(protons.length==1 && neutrons.length==2){
            images.src="./atome/Tritium.png"
        }
    }
}
