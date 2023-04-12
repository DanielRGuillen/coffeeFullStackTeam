const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = [] //se crea un arreglo

/**El foreach toma como argumento una función de callback que se llamará para cada elemento del array. Cada elemento del array se pasa a la función de callback, y el código dentro de la función de callback se ejecuta para cada elemento.*/
Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

/** El e.target se refiere a que  si tiene un botón en su página web y agrega un controlador de eventos para el evento "click", puede utilizar e.target para hacer referencia al botón que fue clicado.  */
function addToCarritoItem(e){
  const button = e.target
  /**El .closest es un método que se utiliza para buscar el elemento más cercano que coincida con un selector determinado en el árbol de elementos DOM (Document Object Model). Es un método disponible en los objetos de tipo Element. */
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src; //.src imagen
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  } //acá está tomando los valores de cada contenedor para llevarlo al carre

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')


    /*Acá está la parte donde suma el item en el carrito cada vez que se hace click en el botón */
  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){

    /*el .trim nos ayuda a eliminar espacios en blanco */
    /*este if lo que hace es que si el titulo es igual al newitem, va a sumar 1 en la cantidad */
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 

/**la función .map  toma como argumento una función de callback que se aplicará a cada elemento del array. Cada elemento del array original se pasa a la función de callback y el valor devuelto por la función de callback se utiliza como el elemento correspondiente en el nuevo array.

Aquí hay un ejemplo de cóm */
function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    /**El .apprend es un método que se utiliza para agregar contenido al final de un elemento HTML. */
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}


function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  /**El foreach toma como argumento una función de callback que se llamará para cada elemento del array. Cada elemento del array se pasa a la función de callback, y el código dentro de la función de callback se ejecuta para cada elemento.*/
  carrito.forEach((item) => {
    /** El .replace es un método que se utiliza para reemplazar una subcadena o una expresión regular en una cadena dada.*/
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  /**El .closest  es un método que se utiliza para buscar el elemento más cercano que coincida con un selector determinado en el árbol de elementos DOM (Document Object Model). Es un método disponible en los objetos de tipo Element.*/
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  /** El .closets es un método que se utiliza para buscar el elemento más cercano que coincida con un selector determinado en el árbol de elementos DOM (Document Object Model). Es un método disponible en los objetos de tipo Element. */
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  /** El foreach toma como argumento una función de callback que se llamará para cada elemento del array. Cada elemento del array se pasa a la función de callback, y el código dentro de la función de callback se ejecuta para cada elemento. */
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

/**E método stringify se utiliza para convertir un objeto en una cadena de texto (string). La función JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON.

Esta función es útil cuando necesitamos enviar datos a un servidor o guardarlos en algún lugar, ya que la mayoría de los sistemas solo pueden trabajar con datos en formato de texto.  */
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

/**El onload es un evento que se dispara cuando un elemento o una página web ha terminado de cargarse. Se puede asignar un controlador de eventos para el evento onload en elementos como imágenes, scripts, iframes y en la página web en sí. */
window.onload = function(){
  /**El .parse es un método que se utiliza para analizar una cadena de texto y convertirla en un valor o objeto JavaScript. */
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}