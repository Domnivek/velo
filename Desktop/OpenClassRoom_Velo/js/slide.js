let index = 0;
let images =
[
	"img/img1.png",
	"img/img2.png",
	"img/img3.png",
	"img/img4.png",
	"img/img5.png",
	"img/img6.png",
	"img/img7.png"
];

//********************************************
// 			Slide automatique
//*******************************************
let slideAuto = autoSlide();

function autoSlide(){
	document.slide.src = images[this.index];
		if(this.index < images.length -1){
			this.index++; 
		} else { 
			this.index = 0;
		}
		time = setTimeout("autoSlide()", 1000);
};
window.onload=autoSlide;

//********************************************
// 	Utilisation des boutton stop & play
//*******************************************
let slideOff = offSlide();
let stop = document.getElementById('stop');
let play = document.getElementById('play');

function offSlide(){
	window.clearTimeout(time);
};

// Button stop
stop.addEventListener('click', function(){
    offSlide();
	stop.style.display = 'none';
	play.style.display = 'block';
});

// Button play
play.addEventListener('click', function(){
	autoSlide();
	stop.style.display = 'block';
	play.style.display = 'none';
})

//********************************************
// 	Utilisation des chevrons gauche & droite
//*******************************************
let droite = document.getElementById('right');
let gauche = document.getElementById('left');

//fonction droite
function right(){
	if(this.index < images.length -1){
		this.index++;
		offSlide();
	}else{
		this.index = 0;
		
	}
	document.slide.src = images[this.index];
}

//fonction gauche
function left(){
	if(this.index > 0){
		this.index--;
		offSlide();
	}else{
		this.index = images.length -1;
	}
	document.slide.src = images[this.index];images
}

//Chevron droite
droite.addEventListener('click', function(){
	right();
});

//Chevron gauche
gauche.addEventListener('click', function(){
	left();
});

//*****************************************************
// 	Utilisation des touches gauche & droite du clavier
//*****************************************************
document.addEventListener('keydown', function(e) {
	let touche = e.keyCode;
	if (touche === 39 || touche === 37) {
		offSlide();
	if (touche === 39) {
		right();
	} else if (touche === 37) {
		left();
	}
}
});






// function right(){
// 	document.slide.src = images[this.index];
// 	if(i < images.length -1 ){
// 		i ++;
// 		window.clearTimeout(time);
// 	}else{
// 		i = 0;
// 	}



// document.getElementById('right').addEventListener('click', function right(){
// 	document.slide.src = images[i];
// 	if(i < images.length -1 ){
// 		i ++;
// 		window.clearTimeout(time);
// 	}else{
// 		i = 0;
// 	}
// });

// document.getElementById('left').addEventListener('click', function left(){
// 	document.slide.src = images[i];
// 	if(i > 0){
// 		i--;
// 		window.clearTimeout(time);
// 	}else{
// 		i = images.length -1;
// 	}
// });






// document.getElementById('right').addEventListener('click', function right(){
// 	document.slide.src = images[i];
// 	if(i < images.length -1 ){
// 		i ++;
// 		window.clearTimeout(time);
// 	}else{
// 		i = 0;
// 	}
// });

// document.getElementById('left').addEventListener('click', function left(){
// 	document.slide.src = images[i];
// 	if(i > 0){
// 		i--;
// 		window.clearTimeout(time);
// 	}else{
// 		i = images.length -1;
// 	}
// });

// document.getElementById('stop').addEventListener('click', function(){
// 	window.clearTimeout(time);
// 	document.getElementById('stop').style.display = 'none';
// 	document.getElementById('play').style.display = 'block';
// });

// document.getElementById('play').addEventListener('click', function(){
// 	setTimeout("changeImg()", 1000);
// 	document.getElementById('stop').style.display = 'block';
// 	document.getElementById('play').style.display = 'none';
// })

// function right(){
// 	document.slide.src = images[i];
// 	if(i < images.length -1 ){
// 		i ++;
// 		window.clearTimeout(time);
// 	}else{
// 		i = 0;
// 	}
// }

// function left(){
// 	document.slide.src = images[i];
// 	if(i > 0){
// 		i--;
// 		window.clearTimeout(time);
// 	}else{
// 		i = images.length -1;
// 	}
// }

// document.addEventListener('keydown', function(e) {
// 	let touche = e.keyCode;
// 	if (touche === 39 || touche === 37) {
// 		window.clearTimeout(time);
// 	if (touche === 39) {
// 		right();
// 	} else if (touche === 37) {
// 		left();
// 	}
// }
// });


// Function de changement d'image
// function changeImg(){
// 	document.slide.src = images[this.index];

// // Vérifie si l'index est en-dessous du max du tableau
// 	if(this.index < images.length - 1){
// 		this.index++; // Ajoute 1 a  l'ndex
// 	} else { 
// 		this.index = 0; // Sinon repart à 0
// 	}

// // Effectue un changement d'image tout les x temp de = let time
// 	time = setTimeout("changeImg()", 1000);
// }



// //Execute le la function quand la page et charger
// window.onload=changeImg;

