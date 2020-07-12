
var description = [
    "img/logos/1024px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    "img/logos/800px-Bartolomé_Esteban_Perez_Murillo_014.jpg",
    "img/logos/800px-Igualtat_de_sexes.svg.png",
    "img/logos/Ada_Lovelace.jpg",    
    "img/logos/Grace_Murray_Hopper.jpg",
    "img/logos/adaneva.jpg",
    "img/logos/illuminati.png",
    "img/logos/stolen_kiss.jpg",
    "img/logos/xfiles.png"    
];

var size = description.length
var x = Math.floor(size*Math.random())
document.getElementById('logo').src=description[x];
