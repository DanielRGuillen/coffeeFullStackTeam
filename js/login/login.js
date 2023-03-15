// const e = require("express");
// const { json } = require("express");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

let dataUser;

// VALIDACION CARACTERES

const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    phone: /^[0-9]{10}$/, // recibe 10 digitus numericos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,12}$ + [\W_]/, // 6 a 12 digitos, caracter especial .

}
function validarPassword() {
    const password = document.getElementById("password").value;
    const numero = /[0-9]/;
    const caracterEspecial = /[\W_]/;
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
    } else if (!numero.test(password)) {
        alert("La contraseña debe contener al menos un número");
    } else if (!caracterEspecial.test(password)) {
        alert("La contraseña debe contener al menos un carácter especial");
    } else {
        registrarUsuario();
        //aqui va ek codigo cuando se registra el user
    }
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nameU":
            if (expresiones.name.test(e.target.value)) {
                return true;
            }
            else {
                document.getElementById('alert1').innerHTML = "Ingresa tu nombre";
            }
            break;

        case "lastName":
            if (expresiones.lastName.test(e.target.value)) {
                return true;
            }
            else {
                document.getElementById('alert2').innerHTML = "Ingresa tu apellido";
            }

            break;
        case "phone":
            if (expresiones.phone.test(e.target.value)) {
                return true;
            }
            else {
                document.getElementById('alert3').innerHTML = "Ingresa un número";
            }

            break;

        case "email":
            if (expresiones.email.test(e.target.value)) {
                return true;
            }
            else {
                document.getElementById('alert4').innerHTML = "Ingresa tu e-mail";
            }
            break;

        case "password":
            if (expresiones.password.test(e.target.value)) {
                return true;
            }
            else {
                document.getElementById('alert5').innerHTML = "Ingresa una contraseña";
                validarPassword();
            }
            break;
    }

}


inputs.forEach((input) => {
    // input.addEventListener('keyup', validarFormulario);-- /* me imprime de acuerdo al case : hola*/
    input.addEventListener('blur', validarFormulario);
});



/* CODIGO PARA REGISTRO DE USUARIO */

const signUp = e => {

    let nameU = document.getElementById('nameU').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log('name', nameU);
    console.log('lastName', lastName);
    console.log('email', email);
    console.log('password', password);


    let dataUser = JSON.parse(localStorage.getItem('dataUser')) || [];


    // validación de datos, existen o no existen en local storage

    let exist = dataUser.length && JSON.parse(localStorage.getItem('dataUser')).some(data =>
        data.nameU.toLowerCase() == nameU.toLowerCase() &&
        data.lastName.toLowerCase() == lastName.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase());

    if (!exist) {

        dataUser.push({ nameU, lastName, email, password });

        localStorage.setItem('dataUser', JSON.stringify(dataUser));

        alert("Registro exitoso");

        document.querySelector('#formulario input').reset();
    }
    else {
        alert("Los datos ya se encuentran registrados");
    }

    e.preventDefault();

}


// CODIGO PARA EL INICIO DE SESION
const signIn = e => {

    let email = document.getElementById('emailR').value;
    let password = document.getElementById('passwordR').value;

    dataUser = JSON.parse(localStorage.getItem('dataUser')) || [];


    // validación si los datos existen o no en local storage

    let exist = dataUser.length && JSON.parse(localStorage.getItem('dataUser')).some(data =>
        data.email == email &&
        data.password == password);


    if (!exist) {
        alert("Los datos son incorrectos o no se encuentran registrados");
    }
    else {
        alert("Bienvenido");
    }


    e.preventDefault();

}


document.addEventListener('onclick', signIn);

