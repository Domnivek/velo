//  1d1a8604bb18bc845f22ee84f5ee2684db15d12d

// GET https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=1d1a8604bb18bc845f22ee84f5ee2684db15d12d


let infoReservation = document.getElementById('info-reservation');
let pannelResa = document.getElementById('validation-reservation');
let removeDraw = document.getElementById('remove-draw');
let annulerResa = document.getElementById('annuler_resa');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let back = document.getElementById('back');
let closePannel = document.getElementById('close-pannel');
let validerResa = document.getElementById('valider_resa');
let validationAdd = document.getElementById('validation-add');
let btnReserv = document.getElementById('btn-reserv');
let result = document.getElementById('result');
let userInfo = document.getElementById('user-info');
let veloAdresse = document.getElementById('velo-adresse');
let resultAdresse = document.getElementById('result-adresse');
let closeResa = document.getElementById('close_resa');
let userResa = document.getElementById('user-resa');
let removeResa = document.getElementById('remove-resa');
let userAnnulation = document.getElementById('user-annulation');
let closeAnnulation = document.getElementById('close-annulation');




//test local strorage resvatione valide

// stor.innerHTML = localStorage.getItem('resvOk');


// validerResa.addEventListener('click', function(e) { 
//     e.preventDefault();
//     const nomValue = document.getElementById('nom').value;
//     const prenomValue = document.getElementById('prenom').value;
//     const user = nomValue + " , " + prenomValue;
//     const result = document.getElementById('result');
    
//     localStorage.setItem('resvOk', user);

//     pannelResa.style.display = 'none';
//     validationAdd.style.display = 'block';
//     result.innerHTML = user;
// });

removeDraw.addEventListener('click', function(e) {
    e.preventDefault();
    context .clearRect(0, 0, 1000, 1000);
});

back.addEventListener('click', function(e) {
    e.preventDefault();
    infoReservation.style.display = 'block';
    pannelResa.style.display = 'none';
});

closePannel.addEventListener('click', function(e) {
    e.preventDefault();
    pannel.style.display = 'none';
});

closeResa.addEventListener('click', function(e) {
    e.preventDefault();
    validationAdd.style.display = 'none';
    pannel.style.display = 'none';
    userResa.style.display = 'block';
});

closeAnnulation.addEventListener('click', function(e) {
    e.preventDefault();

    userAnnulation.style.display = 'none';
});

removeResa.addEventListener('click', function(e) {
    e.preventDefault();
    
    userResa.style.display = 'none';
    userAnnulation.style.display = 'block';
});



btnReserv.addEventListener('click', function(e) {
    e.preventDefault();

    infoReservation.style.display = 'none';
    pannelResa.style.display = 'block';
});


validerResa.addEventListener('click', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;
    let userName = lastName + " " + name;

    pannelResa.style.display = 'none';
    validationAdd.style.display = 'block';
    result.innerHTML = userName;
    userInfo.innerHTML = userName;

});

localStorage.setItem('marker', station.address);

Storage.removeItem('marker')

if( localStorage.getItem('marker')){
    console.log('ok')
}





















