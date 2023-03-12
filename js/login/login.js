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
