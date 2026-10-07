import React, { useRef } from 'react';
import Footer from "../Components/Footer"
import FormLanding from "../Components/FormLanding"
import NavBar from "../Components/NavBar"
import Nosotros from "../Components/Nosotros"
import Presentacion from "../Components/Presentacion"

const OlymphusSite = () => {

  // 1. Creamos la referencia que apuntará al formulario
  const formularioRef = useRef(null);
  const serviciosRef2 = useRef(null);
  const contactRef = useRef(null);

  // 2. Función encargada de hacer el scroll suave al formulario
  const scrollToFormulario = (e) => {
    if (e) e.preventDefault(); // Evita el comportamiento por defecto si es un enlace <a>
    
   let cont = formularioRef.current?.scrollIntoView({ 
      behavior: 'smooth', // Aplica el desplazamiento suave
      block: 'start'      // Alinea la sección al inicio de la pantalla
    });

    console.log("contacto", cont)

  }

  const scrollToServicio2 = (e) => {
    if (e) e.preventDefault(); // Evita el comportamiento por defecto si es un enlace <a>
    
   serviciosRef2.current?.scrollIntoView({ 
      behavior: 'smooth', // Aplica el desplazamiento suave
      block: 'start'      // Alinea la sección al inicio de la pantalla
    });

  }

  const scrollToContact = (e) => {
    if (e) e.preventDefault(); // Evita el comportamiento por defecto si es un enlace <a>
    
   contactRef.current?.scrollIntoView({ 
      behavior: 'smooth', // Aplica el desplazamiento suave
      block: 'start'      // Alinea la sección al inicio de la pantalla
    });

  }

  

  return (

    <>

    <main >
        <NavBar onContactClick={scrollToFormulario} onServiciosClick3={scrollToServicio2} onContactClick2 ={scrollToContact}/>
        
        <Presentacion onContactClick = {scrollToFormulario} servRef2 = {serviciosRef2} />

        <div ref={formularioRef}>
          <FormLanding />
        </div>

        <div ref ={contactRef}>
          < Nosotros onContactClick={scrollToFormulario}/>
        </div>

        <Footer />

    </main>
    </>

        
  )
}

export default OlymphusSite