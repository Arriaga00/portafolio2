 const d= document
 const contenedor = d.querySelector('.esenas')
 const derecha = d.querySelector('.derecha')
 const izquierda = d.querySelector('.izquierda')
 const boton_acerca_de_mi = d.querySelector('.boton-lateral')
 const panel_lateral = d.querySelector('.panel')
 const panelActivo = d.querySelector('.panel.activo')
 const servicio = d.querySelector('.servicio')
 const proyecto = d.querySelector('.proyectos')
 const contenido_interactivo= d.querySelector('.nombre-interactivo')
 const modo_oscuro = d.querySelector('.oscuro')
 const card_servicio = d.querySelector('.card-servicios')
 

 
 d.addEventListener('click',e=>{
  console.log(e.target)
})


modo_oscuro.addEventListener('click',(e)=>{
  d.body.classList.toggle('activo')
})

boton_acerca_de_mi.addEventListener('click',(e)=>{
  panel_lateral.classList.toggle('activo')

})

//Movimiento de derecha e izquierda de tarjetas
derecha.addEventListener('click', ()=>{
  contenido_interactivo.textContent = 'Servicios'
  contenedor.scrollLeft += 1750
 })
  
 izquierda.addEventListener('click', ()=>{
   contenido_interactivo.textContent = 'Proyectos'
   contenedor.scrollLeft -= 1750
  })
  
  proyecto.addEventListener('click', ()=>{
    contenido_interactivo.textContent = 'Proyectos'
    setTimeout(() => {
      contenedor.scrollLeft -= 1750
    }, 500);
    
})

servicio.addEventListener('click', ()=>{
  contenido_interactivo.textContent = 'Servicios'
  setTimeout(() => {
    contenedor.scrollLeft += 1750
  }, 500);
  
})


 let imgresponsive = 'https://i.postimg.cc/pL2MFTSx/3d-casual-life-iphone-bitcoin.png'
 let titulo_responsive = 'Implementación de diseño responsivo'
 let descripcion_responsive = ' Asegurarse de que las páginas web se vean y funcionen bien en una variedad de dispositivos y tamaños de pantalla es una parte crucial del trabajo de un desarrollador front-end.'
 
 let dep_img = 'https://i.postimg.cc/xdWnbX16/casual-life-3d-boy-sitting-with-laptop-and-cup-1.png'
 let dep_titulo = 'Pruebas y depuración'
 let dep_descripcion = "Los desarrolladores front-end junior también pueden ser responsables de realizar pruebas básicas de usabilidad y funcionalidad en el código que escriben, y de solucionar cualquier problema que encuentren"

 let opt_img = 'https://i.postimg.cc/9FN61V06/3d-casual-life-analytics-on-computer-screen.png'
 let opt_titulo = 'Optimización del rendimiento de la página web'
 let opt_descripcion = 'Esto se refiere a hacer que el sitio web cargue más rápido mejorando el código, las imágenes y el almacenamiento en caché. Un sitio web rápido puede mejorar la experiencia del usuario y aumentar la cantidad de usuarios que se quedan o compran algo.'

function tarjetas (imgtxt, titulotxt, descripciontxt){
  let card = d.createElement('div')
  card.classList.add('tarjetas')  
  let img = d.createElement('img')
  img.src = imgtxt
  img.alt = 'img_targetas'
  let titulo = d.createElement('h3')
  titulo.textContent = titulotxt
  let descripcion =d.createElement("p")
  descripcion.textContent = descripciontxt
  
  card.appendChild(img)
  card.appendChild(titulo)
  card.appendChild(descripcion)

  card_servicio.appendChild(card)
}

tarjetas(imgresponsive, titulo_responsive, descripcion_responsive)
tarjetas(dep_img,dep_titulo,dep_descripcion)
tarjetas(opt_img,opt_titulo,opt_descripcion)




function enviarEmail(){   
    d.addEventListener('submit', e=>{
      e.preventDefault()
    })
    let parametros = {
      from_name : d.getElementById('fullName').value,
      email_id : d.getElementById('email_id').value,
      message : d.getElementById('mensaje1').value
    }

    emailjs.send('service_lsskepv','template_38v78hb', parametros).then(function(res){
      alert('Enviado!' + res.status)
    })

}