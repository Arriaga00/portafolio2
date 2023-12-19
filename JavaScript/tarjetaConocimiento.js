const d = document
let tarjetasConocimientoInfo = [
    {
      img: "https://i.postimg.cc/vHpwXP8Z/html.png",
    },
    {
      img: "https://i.postimg.cc/t4WQch7t/css.png",
    },
    {
      img: "https://i.postimg.cc/kXVdQrmH/archivo-js.png",
    },
    {
      img: "https://i.postimg.cc/5ytybsDC/react-icon-0.png",
    },
  ];

  export default function tarjetaConocimiento(con) {
    const contenedor = d.querySelector(con);
    tarjetasConocimientoInfo.forEach((e) => {
      let card = d.createElement("div");
      card.classList.add("tarjetasConocimiento");
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