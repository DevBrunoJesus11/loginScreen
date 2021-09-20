window.addEventListener('load', activateInput);

var inputName = null;
var firstName = null;

function activateInput(){
    inputName = document.querySelector('#id');
    firstName = document.querySelector('#firstName');
    inputName.focus();
    firstName.focus();

}

var signUp = document.getElementById('signUp');
signUp.addEventListener('click', activateSignUp);


function activateSignUp(){
    let box = document.querySelector('.box')
    let login = document.querySelector('.login');
    login.classList.add('hide');
    let cadastro = document.querySelector('.cadastro');
    cadastro.classList.add('show');
    console.log('clicado');
}



