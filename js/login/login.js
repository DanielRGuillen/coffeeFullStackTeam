const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let dataUser;


// VALIDACION DE LOS INPUT CON EXPRESIONES REGULARES

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
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 8 caracteres");
    } else if (!numero.test(password)) {
        alert("La contraseña debe contener al menos un número");
    } else (!caracterEspecial.test(password)) 
        alert("La contraseña debe contener al menos un carácter especial");
    
}

/* EJECUTA LA COMPARACION ENTRE LAS EXPRESIONES Y LA INFORMACIÓN ESCRITA EN CADA INPUT */
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nameU":
            if (expresiones.name.test(e.target.value)) {
                document.getElementById('alert1').innerHTML = '';
            }
            else {
                document.getElementById('alert1').innerHTML = 'Debes llenar este campo';
            }
            break;

        case "lastName":
            if (expresiones.lastName.test(e.target.value)) {
                document.getElementById('alert2').innerHTML = "";
            }
            else {
                document.getElementById('alert2').innerHTML = "Debes llenar este campo";
            }

            break;
        case "phone":
            if (expresiones.phone.test(e.target.value)) {
                document.getElementById('alert3').innerHTML = '';
            }
            else {
                document.getElementById('alert3').innerHTML = "Ingresa un número";
            }

            break;

        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('alert4').innerHTML = '';
            }
            else {
                document.getElementById('alert4').innerHTML = "Ingresa un e-mail válido";
            }
            break;

        case "password":
            if (validarPassword()) {
                document.getElementById('alert5').innerHTML = "";
            }
            else {
                document.getElementById('alert5').innerHTML = "Ingresa una contraseña";
            }
            break;
    }
   
    e.preventDefault();

}


inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
});


/* CODIGO PARA REGISTRO DE USUARIO */

const signUp = e =>{

    let nameU = document.getElementById('nameU').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let dataUser = JSON.parse(localStorage.getItem('dataUser')) || [];


    // validación de datos, existen o no existen en local storage

    let exist = dataUser.length && JSON.parse(localStorage.getItem('dataUser')).some (data =>
        data.nameU.toLowerCase() == nameU.toLowerCase() &&
        data.lastName.toLowerCase() == lastName.toLowerCase() &&
        data.email == email);

    if (!exist) {

        dataUser.push({ nameU, lastName, phone, email, password });

        localStorage.setItem('dataUser', JSON.stringify(dataUser));

        document.querySelector('#formulario').reset();

        alert("Registro exitoso");

        
    }
    else {
        alert("Los datos ya se encuentran registrados");
    }

    e.preventDefault();

}


// VALIDA LOS DATOS INGRESADOS POR INPUT PARA EL INICIO DE SESION
function signIn(e) {

    let emailIn = document.getElementById('emailIn').value;
    let passwordIn = document.getElementById('passwordIn').value;

    dataUser = JSON.parse(localStorage.getItem('dataUser')) || [];


    // validación si los datos existen o no en local storage

    let exist = dataUser.length && JSON.parse(localStorage.getItem('dataUser')).some(data =>
        data.email == emailIn &&
        data.password == passwordIn);


    if (!exist) {
        alert("Los datos son incorrectos o no se encuentran registrados");
    }else {
        alert("Bienvenido");
    }


    e.preventDefault();

}


document.addEventListener('onclick', signIn);
// document.addEventListener('onclick', signUp);


