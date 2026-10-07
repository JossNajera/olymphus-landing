import { useRef } from 'react';
import Servicios from "./Servicios"
import TopInfo from "./TopInfo"

const Presentacion = ({onContactClick, servRef2}) => {

// 1. Creamos la referencia que apuntará al formulario
  const serviciosRef = useRef(null);

  // 2. Función encargada de hacer el scroll suave a la seccion de la pantalla
  const scrollToServicio = (e) => {
    if (e) e.preventDefault(); // Evita el comportamiento por defecto si es un enlace <a>
    
   serviciosRef.current?.scrollIntoView({ 
      behavior: 'smooth', // Aplica el desplazamiento suave
      block: 'start'      // Alinea la sección al inicio de la pantalla
    });

  }
  
  return (
    <>
      <section className="container-fluid px-4 hero-section">
        <TopInfo onContactClick2={onContactClick} onServiciosClick={scrollToServicio}/>

        <div ref = { serviciosRef} >
          <div ref={ servRef2 }>
            <Servicios onContactClick2={onContactClick} /> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Presentacion