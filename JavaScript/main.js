const d = document;
const contenedor = d.querySelector(".esenas");
const derechabtn = d.querySelector(".derechabtn");
const izquierdabtn = d.querySelector(".izquierdabtn");
const boton_acerca_de_mi = d.querySelector(".boton-lateral");
const panel_lateral = d.querySelector(".panel");
const servicio = d.querySelector(".servicio");
const proyecto = d.querySelector(".proyectos");
const contenido_interactivo = d.querySelector(".nombre-interactivo");
const modo_oscuro = d.querySelector(".oscuro");
const card_servicio = d.querySelector(".card-servicios");
const transparencia = d.getElementById("overlay");



//local storage 
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'activo') {
  d.body.classList.add('activo');
} else {
  d.body.classList.remove('activo');
}



//contador de direcciones de div esenas
let contador=1
d.addEventListener("click", (e) => {

      //local storage 
  if (e.target === modo_oscuro) {
    d.body.classList.toggle("activo");
    if (d.body.classList.contains("activo")) {
      localStorage.setItem('tema', 'activo');
    } else {
      localStorage.setItem('tema', 'claro');
    }
  }
      //canva
  if (e.target === boton_acerca_de_mi) {
    panel_lateral.classList.toggle("activo");
    transparencia.style.display = "block";
  }
    //canva2
  if (e.target === transparencia) {
    transparencia.style.display = "none";
    panel_lateral.classList.toggle("activo");
  }
      // derecha (btn)
  if (e.target === derechabtn) {
    contenedor.scrollLeft += 1750;
    contador++
      if (contador===2)   contenido_interactivo.textContent = 'Servicios';
      if (contador===3)   contenido_interactivo.textContent = 'Conocimiento en';
      if (contador>3)     contador = 3
      console.log(contador)
    }
   
      //izquierda (btn)
  if (e.target === izquierdabtn) {
    contenedor.scrollLeft -= 1750;
    contador--
    if (contador===1)   contenido_interactivo.textContent = 'Proyectos';
    if (contador===2)   contenido_interactivo.textContent = 'Servicios';
    if (contador===3)   contenido_interactivo.textContent = 'Conocimiento en';
    if (contador<1)     contador = 1
    console.log(contador)
  }

    //interaccion de boton (nav)
  if (e.target === proyecto) {
    contenido_interactivo.textContent = "Proyectos";
    setTimeout(() => {
      contenedor.scrollLeft -= 1750*2;
      contador = 1
    }, 500);
  }
  
  // iteracion de boton(nav)
  if (e.target === servicio) {
    if (contador==3) {
      contenido_interactivo.textContent = "Servicios";
      setTimeout(() => {
        contenedor.scrollLeft -= 1750;
        contador = 2
      }, 500);
    }
    else{
      contenido_interactivo.textContent = "Servicios";
      setTimeout(() => {
        contador = 2
        contenedor.scrollLeft += 1750;
      }, 500);
    }
    
  }
});



//agregando a card servicios tarjetas e=generadas con Js
let imgresponsive =
  "https://i.postimg.cc/pL2MFTSx/3d-casual-life-iphone-bitcoin.png";
let titulo_responsive = "Implementación de diseño responsivo";
let descripcion_responsive =
  " Asegurarse de que las páginas web se vean y funcionen bien en una variedad de dispositivos y tamaños de pantalla es una parte crucial del trabajo de un desarrollador front-end.";

let dep_img =
  "https://i.postimg.cc/xdWnbX16/casual-life-3d-boy-sitting-with-laptop-and-cup-1.png";
let dep_titulo = "Pruebas y depuración";
let dep_descripcion =
  "Los desarrolladores front-end junior también pueden ser responsables de realizar pruebas básicas de usabilidad y funcionalidad en el código que escriben, y de solucionar cualquier problema que encuentren";

let opt_img =
  "https://i.postimg.cc/9FN61V06/3d-casual-life-analytics-on-computer-screen.png";
let opt_titulo = "Optimización del rendimiento de la página web";
let opt_descripcion =
  "Optimizar el código, imágenes y caché acelera la carga del sitio web, mejorando la experiencia del usuario y potencialmente aumentando las visitas y compras.";

function tarjetas(imgtxt, titulotxt, descripciontxt) {
  let card = d.createElement("div");
  card.classList.add("tarjetas");
  let img = d.createElement("img");
  img.src = imgtxt;
  img.alt = "img_targetas";
  let titulo = d.createElement("h3");
  titulo.textContent = titulotxt;
  let descripcion = d.createElement("p");
  descripcion.textContent = descripciontxt;

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(descripcion);

  card_servicio.appendChild(card);
}

tarjetas(imgresponsive, titulo_responsive, descripcion_responsive);
tarjetas(dep_img, dep_titulo, dep_descripcion);
tarjetas(opt_img, opt_titulo, opt_descripcion);




const card_conocimiento = d.querySelector('.card-conocimiento')
let imgHtml = 'https://i.postimg.cc/vHpwXP8Z/html.png'

let imgCss = 'https://i.postimg.cc/t4WQch7t/css.png'

let imgJs = 'https://i.postimg.cc/kXVdQrmH/archivo-js.png'

let imgreact = 'https://i.postimg.cc/5ytybsDC/react-icon-0.png'


function tarjetas2(imgtxt, titulotxt, descripciontxt) {
  let card = d.createElement("div");
  card.classList.add("tarjetasConocimiento");
  let img = d.createElement("img");
  img.src = imgtxt;
  img.alt = "img_targetas";
  let titulo = d.createElement("h3");
  titulo.textContent = titulotxt;
  let descripcion = d.createElement("p");
  descripcion.textContent = descripciontxt;

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(descripcion);

  card_conocimiento.appendChild(card);
}

tarjetas2(imgHtml)
tarjetas2(imgCss)
tarjetas2(imgJs)
tarjetas2(imgreact)





//funcion para enviar email a correo andresfelipearriaga@gmail.com sin validacion
function enviarEmail() {
  d.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  let parametros = {
    from_name: d.getElementById("fullName").value,
    email_id: d.getElementById("email_id").value,
    message: d.getElementById("mensaje1").value,
  };

  emailjs
    .send("service_lsskepv", "template_38v78hb", parametros)
    .then(function (res) {
      alert("Enviado!" + res.status);
    });
}
