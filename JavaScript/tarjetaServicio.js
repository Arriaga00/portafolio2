const d = document;
let tarjetasInfo = [
  {
    img: "https://i.postimg.cc/pL2MFTSx/3d-casual-life-iphone-bitcoin.png",
    titulo: "Implementación de diseño responsivo",
    descripcion:
      "Asegurarse de que las páginas web se vean y funcionen bien en una variedad de dispositivos y tamaños de pantalla es una parte crucial del trabajo de un desarrollador front-end.",
  },
  {
    img: "https://i.postimg.cc/xdWnbX16/casual-life-3d-boy-sitting-with-laptop-and-cup-1.png",
    titulo: "Pruebas y depuración",
    descripcion:
      "Los desarrolladores front-end junior también pueden ser responsables de realizar pruebas básicas de usabilidad y funcionalidad en el código que escriben, y de solucionar cualquier problema que encuentren",
  },
  {
    img: "https://i.postimg.cc/9FN61V06/3d-casual-life-analytics-on-computer-screen.png",
    titulo: "Optimización del rendimiento de la página web",
    descripcion:
      "Optimizar el código, imágenes y caché acelera la carga del sitio web, mejorando la experiencia del usuario y potencialmente aumentando las visitas y compras.",
  },
];


export default function tarjetaServicio(con) {
  const contenedor = d.querySelector(con);
  tarjetasInfo.forEach((e) => {
    let card = d.createElement("div");
    card.classList.add("tarjetas");
    let img = d.createElement("img");
    img.src = e.img;
    img.alt = "img_tarjetas";
    let titulo = d.createElement("h3");
    titulo.textContent = e.titulo;
    let descripcion = d.createElement("p");
    descripcion.textContent = e.descripcion;

    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    contenedor.appendChild(card);
  });
}
