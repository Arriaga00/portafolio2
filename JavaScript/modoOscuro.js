const d = document

//local storage 
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'activo') {
  d.body.classList.add('activo');
} else {
  d.body.classList.remove('activo');
}

export default function modOscuro(btn){
    const modo_oscuro = d.querySelector(btn)
    d.addEventListener('click', e=>{
        if (e.target === modo_oscuro) {
            d.body.classList.toggle("activo");
            //local storage 
            if (d.body.classList.contains("activo")) {
              localStorage.setItem('tema', 'activo');
            } else {
              localStorage.setItem('tema', 'claro');
            }
          }
        }
    )
    
}