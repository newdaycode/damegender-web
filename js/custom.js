
var description = [
    "img/logos/1024px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    "img/logos/The_Kiss_Klimt_Google_Cultural_Institute.jpg",
    "img/logos/800px-Bartolomé_Esteban_Perez_Murillo_014.jpg",
    "img/logos/800px-Igualtat_de_sexes.svg.png",
    "img/logos/Ada_Lovelace.jpg",    
    "img/logos/Grace_Murray_Hopper.jpg",
    "img/logos/adaneva.jpg",
    "img/logos/illuminati.png",
    "img/logos/stolen_kiss.jpg",
    "img/logos/xfiles.png",
    "img/logos/Edith_Clarke.jpg",
    "img/logos/Hedy_Lamarr.jpg",
    "img/logos/Karen_Sparck.jpg",
    "img/logos/Margaret_Hamilton_1995.jpg",
    "img/logos/RozsaPeter.jpg",
    "img/logos/Shirley_Ann_Jackson.jpg",
    "img/logos/Angela_Ruiz_Robles.jpg"
];


var size = description.length
var x = Math.floor(size*Math.random())
document.getElementById('logo').src=description[x];

var sentences = [
    "In the Free Software all people are males, Teresa",
    "Down with the patriarchy that is going to fall, that is going to fall, above the feminism that is going to win, that is going to win.",
    "The Forbes people must be gays, Teresa, they are men generally.",
    "Fundamento is name of female in Spain, Teresa",
    "Damegender seems the Lucia y el Sexo, spanish film, Teresa",
    "Isa has a problem similar to Andrea, you don't know if it's male or female, easily, Teresa",
    "Teresa says that the usa people must not divided the names by races, it must be done by nations.",
    "Dame is about David Arroyo Menéndez and he is a male, Teresa, you know.",
    "Teresa, do you think that Inés means in Spain? In-ES? Make sense?",
    "INE thinks in INE terms and it runs perfect Teresa, perfect, you know.",
    "Mary is the name most used in United States of America, Teresa.",
    "Teresa, Margaret is in the top, too.",
    "I like the female with last letter 'a' are feminines, Teresa.",
    "In United States of America, there 1898 people using Abril and 1329 using April. So curious, Teresa.",
    "Teresa says the computer people has not ethical values.",
    "David feels the same ira against the woman idea about the apples than RMS"
    
]

var size = sentences.length
var x = Math.floor(size*Math.random())

document.getElementById('sentence').innerHTML=sentences[x];
