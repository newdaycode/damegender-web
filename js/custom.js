var description = [
    "img/logos/Ada_Lovelace.jpg",
    "img/logos/Grace_Murray_Hopper.jpg",
    "img/logos/adaneva.jpg",
    "img/logos/menendez.jpg",
    "img/logos/xfiles.png",
    "img/logos/th2.png",
    "img/logos/Medusa_by_Caravaggio.jpg"            
];
var size = description.length
var x = Math.floor(size*Math.random())
document.getElementById('logo').src=description[x];
