const d = document
export default function canva(acercaDeMi, transparencia, panel){
    const $acerca = d.querySelector(acercaDeMi),
    $transparencia = d.getElementById(transparencia),
    $panel = d.querySelector(panel)

    d.addEventListener('click',e=>{
        if (e.target === $acerca) {
            $panel.classList.toggle("activo");
            $transparencia.style.display = "block";
          }
            //canva2
          if (e.target === $transparencia) {
            $transparencia.style.display = "none";
            $panel.classList.toggle("activo");
          }
    })
    
}