/*
  @licstart  The following is the entire license notice for the 
  JavaScript code in this page. 
  
  Copyright (C) 2022  David Arroyo Menéndez davidam@gmail.com
  
  The JavaScript code in this page is free software: you can 
  redistribute it and/or modify it under the terms of the GNU 
  General Public License (GNU GPL) as published by the Free Software 
  Foundation, either version 3 of the License, or (at your option) 
  any later version.  The code is distributed WITHOUT ANY WARRANTY; 
  without even the implied warranty of MERCHANTABILITY or FITNESS 
  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details. 
  
  As additional permission under GNU GPL version 3 section 7, you 
  may distribute non-source (e.g., minimized or compacted) forms of 
  that code without the copy of the GNU GPL normally required by 
  section 4, provided you include this license notice and a URL 
  through which recipients can access the Corresponding Source. 
  
  
  @licend  The above is the entire license notice 
  for the JavaScript code in this page.  
*/

var logos = [
    "img/logos/davidam.png",
    "img/logos/1024px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    "img/logos/The_Kiss_Klimt_Google_Cultural_Institute.jpg",
    "img/logos/800px-Bartolomé_Esteban_Perez_Murillo_014.jpg",
    "img/logos/800px-Igualtat_de_sexes.svg.png",
    "img/logos/Ada_Lovelace.jpg",    
    "img/logos/Grace_Murray_Hopper.jpg",
    "img/logos/adaneva.jpg",
    "img/logos/stolen_kiss.jpg",
    "img/logos/xfiles.png",
    "img/logos/Edith_Clarke.jpg",
    "img/logos/Hedy_Lamarr.jpg",
    "img/logos/Karen_Sparck.jpg",
    "img/logos/Margaret_Hamilton_1995.jpg",
    "img/logos/RozsaPeter.jpg",
    "img/logos/Shirley_Ann_Jackson.jpg",
    "img/logos/Angela_Ruiz_Robles.jpg",
    "img/logos/juanmartin.jpg",    
    "img/logos/gender.png",    
    "img/logos/debianwomen-bcn-2014.jpg",
    "img/logos/jakob_and_elizabeth.jpg",
    "img/logos/heteropython.png",    
    "img/logos/Marie_Curie.jpg",
    "img/logos/Irene_Montero_2020.jpg",
    "img/logos/korocastellano.jpg",    
];

var size = logos.length;
var x = Math.floor(size*Math.random());
document.getElementById('logo').src=logos[x];


$('.btn-free-software').click(function() {
    $('.free-software').show();
    $('.most-used-names').hide();    
});

$('.btn-debian').click(function() {
    $('.debian').show();
    $('.gnu').hide();
    $('.kernel').hide();      
});

$('.btn-gnu').click(function() {
    $('.debian').hide();
    $('.gnu').show();
    $('.kernel').hide();      
});
$('.btn-kernel').click(function() {
    $('.debian').hide();
    $('.gnu').hide();
    $('.kernel').show();
});

$('.btn-most-used-names').click(function() {
    $('.most-used-names').show();
    $('.free-software').hide();
    $('.free-software-content').hide();    
});
