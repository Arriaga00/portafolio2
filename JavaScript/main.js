import btnCards from "./bntCards.js";
import canva from "./canva.js";
import modOscuro from "./modoOscuro.js";
import tarjetaConocimiento from "./tarjetaConocimiento.js";
import tarjetaServicio from "./tarjetaServicio.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
  modOscuro('.oscuro')
  canva('.boton-lateral', 'overlay','.panel')
  btnCards('.derechabtn','.izquierdabtn', '.esenas', '.nombre-interactivo')
  tarjetaServicio('.card-servicios')
  tarjetaConocimiento('.card-conocimiento')
})



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
