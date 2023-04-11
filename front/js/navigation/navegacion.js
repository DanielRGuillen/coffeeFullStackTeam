/*páginas que cargan siempre cuando se llaman a las otras páginas*/

$(function () {
  $("#navbar").load("../../html/headerAndFooter/header.html");
});

$(function () {
  $("#footer").load("../../html/headerAndFooter/footer.html");
});

function navbarContact() {
  $(function () {
    $("#padre").load("../../html/contact/contact.html");
  });
}

function navbarAbout() {
  $(function () {
    $("#padre").load("../../html/about_us/aboutUs.html");
  });
}

function navbarProducts() {
  $(function () {
    $("#padre").load("../../html/products/products.html");
  });
}

function footerTerms() {
  $(function () {
    $("#padre").load(
      "../../html/terminos_condiciones/terminos_condiciones.html"
    );
  });
}

function footeriTerms() {
  $(function () {
    $("#padre").load("../../html/terminos_condiciones/privacidad.html");
  });
}

window.addEventListener("load", function () {
  var menuBurger = document.getElementById("navcol-1");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // ocultar el menú hamburguesa al hacer scroll hacia abajo
      menuBurger.classList.remove("show");
    }
    lastScrollTop = scrollTop;
  });
});

