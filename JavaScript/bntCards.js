const d = document;
let contador = 1;

export default function btnCards(
  derecha,
  izquierda,
  contenedor,
  txtInteractivo
) {
  const $derecha = d.querySelector(derecha),
    $izquierda = d.querySelector(izquierda),
    $contenedor = d.querySelector(contenedor),
    $interactivo = d.querySelector(txtInteractivo);

  d.addEventListener("click", (e) => {
    if (e.target === $derecha) {
      $contenedor.scrollLeft += 1750;
      contador++;
      if (contador === 2) $interactivo.textContent = "Servicios";
      if (contador === 3) $interactivo.textContent = "Conocimiento en";
      if (contador > 3) contador = 3;
      console.log(contador);
    }

    if (e.target === $izquierda) {
      $contenedor.scrollLeft -= 1750;
      contador--;
      if (contador === 1) $interactivo.textContent = "Proyectos";
      if (contador === 2) $interactivo.textContent = "Servicios";
      if (contador === 3) $interactivo.textContent = "Conocimiento en";
      if (contador < 1) contador = 1;
      console.log(contador);
    }

    //iteracion de botones nav servicios|proyectos
    const servicio = d.querySelector(".servicio");
    const proyecto = d.querySelector(".proyectos");

    //interaccion de boton (nav)
    if (e.target === proyecto) {
      $interactivo.textContent = "Proyectos";
      setTimeout(() => {
        $contenedor.scrollLeft -= 1750 * 2;
        contador = 1;
      }, 500);
    }

    // iteracion de boton(nav)
    if (e.target === servicio) {
      if (contador == 3) {
        $interactivo.textContent = "Servicios";
        setTimeout(() => {
          $contenedor.scrollLeft -= 1750;
          contador = 2;
        }, 500);
      } else {
        $interactivo.textContent = "Servicios";
        setTimeout(() => {
          contador = 2;
          $contenedor.scrollLeft += 1750;
        }, 500);
      }
    }
  });
}
