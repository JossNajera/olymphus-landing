import { useState } from 'react';
import olymphusLogo from '../assets/logo/logo.png';
import Swal from 'sweetalert2'; 
import axios from 'axios';

const FormLanding = () => {


  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('');
  const [mensaje, setMensaje] = useState('');


    // Función para capturar el texto del select
    const manejarCambioSelect = (e) => {
    const indiceSeleccionado = e.target.selectedIndex;
    const texto = e.target.options[indiceSeleccionado].text; // Obtiene el texto visible
    console.log(texto)
    setServicio(texto);
  };

  // Función para manejar la solicitud POST
  const enviarDatos = async (e) => {
    e.preventDefault(); // Evita que la página se recargue si está dentro de un <form>

  const data = {
        nombreCompleto: nombreCompleto,
        correo: correo,
        empresa: empresa,
        cargo: cargo,
        telefono: telefono,
        servicioInteres: servicio,
        comentario: mensaje
      }


try {

   // MENSAJE AL USUARIO
        Swal.fire({
        title: '¡Datos enviados!',
        text: 'Pronto nos pondremos en contacto contigo.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entendido'
      });
    // Realizamos la petición POST con Axios
      const respuesta = await axios.post(`${process.env.OLYMPHUS_URL}/api/contactanos/`, data);

      console.log('Respuesta del servidor:', respuesta.data);
        

    } catch (error) {
        console.error('Hubo un error al enviar la solicitud:', error);
       
        Swal.fire({
        title: '¡Error al enviar los datos!',
        text: 'Ya has utilizado este correo anteriormente. Intenta con otro.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'cerrar'
      });
      }

      // LIMPIAR FORMULARIO
      setNombreCompleto('');
      setCorreo('');
      setEmpresa('');
      setCargo('');
      setTelefono('');
      setServicio('');
      setMensaje('');
  }




  return (
    <>
            {/* Estilos para el focus de los inputs en tu archivo CSS global o mediante un tag style */}
      <style>{`
        .form-focus-custom:focus {
          background-color: rgba(15, 23, 42, 0.8) !important;
          border-color: #0055ff !important;
          color: #ffffff !important;
          box-shadow: 0 0 8px rgba(0, 85, 255, 0.5) !important;
        }
      `}</style>

      {/* Sección de Contacto / Registro */}
      <section 
        className="contact-landing-section py-5 " 
        style={{ backgroundColor: '#000c24', color: '#ffffff', fontFamily: '"Segoe UI", sans-serif' }}
      >
        <div className="container-fluid px-4 landing-section">
          <div className="row g-5 align-items-center">
            
            {/* LADO IZQUIERDO: Logotipo, Títulos y Textos Atractivos */}
            <div className="col-lg-6 text-center text-lg-start">
              {/* Contenedor del Logotipo */}
              <div className="mb-4 d-inline-block">
                <img 
                  src={olymphusLogo}
                  alt="Olymphus TI Logo" 
                  className="img-fluid" 
                  style={{ maxHeight: '100px', objectFit: 'contain' }} 
                />
              </div>
              
              {/* Títulos de alto impacto */}
              <span 
                className="text-info fw-bold text-uppercase tracking-wider d-block mb-2" 
                style={{ letterSpacing: '2px', fontSize: '0.9rem' }}
              >
                Pruebas Automatizadas & Desarrollo de Software
              </span>
              <h2 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
                Convierte tu negocio en resultados confiables y sostenibles. <br />
                <span style={{
                  color: '#00a2ff',
                  background: 'linear-gradient(to right, #00a2ff, #0055ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Garantizamos la perfección de tus procesos.
                </span>
              </h2>
              
              {/* Textos descriptivos atractivos */}
              <p className="lead text-white mb-4" style={{ color: '#cbd5e1' }}>
                No dejes pasar la oportunidad para hacer crecer tu negocio. Combinamos ingeniería de desarrollo y calidad de software a la medida con arquitecturas avanzadas de pruebas automatizadas.
              </p>
              
              {/* Puntos clave rápidos */}
              <div className="row g-3 text-start d-none d-sm-flex">
                <div className="col-6">
                  <h4 className="h6 fw-bold text-white mb-1">
                    <i className="bi bi-check-circle-fill text-info me-2"></i> Reducción de errores en ambientes Productivos.
                  </h4>
                  <p className="small text-info">Pruebas continuas en cada despliegue.</p>
                </div>
                <div className="col-6">
                  <h4 className="h6 fw-bold text-white mb-1">
                    <i className="bi bi-lightning-charge-fill text-info me-2"></i> Time-to-Market Veloz
                  </h4>
                  <p className="small text-info">Desarrollo ágil para mejorar la calidad.</p>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: Formulario Estilizado de Captura */}
            <div className="col-lg-6">
          
                <h1 className="h2 fw-bold text-center text-white mb-2">Dejanos tus datos</h1>
                <p className="text-center text-info small mb-4">Agenda una cita para platicarnos más sobre tu proyecto.</p>
                
                <form onSubmit={enviarDatos}>
                  {/* Campo: Nombre */}
                  <div className="mb-3">
                    <label htmlFor="landingName" className="form-label text-light small fw-medium">Nombre completo</label>
                    <input 
                      type="text" 
                      className="form-control text-dark form-focus-custom" 
                      id="landingName" 
                      placeholder="Ej. Juan Pérez"
                      value={nombreCompleto}
                      onChange={(e) => setNombreCompleto(e.target.value)}  
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Campo: Correo Electrónico */}
                  <div className="mb-3">
                    <label htmlFor="landingEmail" className="form-label text-light small fw-medium">Correo corporativo</label>
                    <input 
                      type="email" 
                      className="form-control text-dark form-focus-custom" 
                      id="landingEmail" 
                      placeholder="juan@empresa.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}   
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    />
                  </div>
                  {/* Campo: Empresa */}
                  <div className="mb-3">
                    <label htmlFor="landingEmpresa" className="form-label text-light small fw-medium">Empresa</label>
                    <input 
                      type="text" 
                      className="form-control text-dark form-focus-custom" 
                      id="landingEmpresa" 
                      placeholder="Ej. Mi Empresa S.A. de C.V." 
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}  
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    />
                  </div>
                  {/* Campo: Cargo */}
                  <div className="mb-3">
                    <label htmlFor="landingCargo" className="form-label text-light small fw-medium">Cargo</label>
                    <input 
                      type="text" 
                      className="form-control text-dark form-focus-custom" 
                      id="landingCargo" 
                      placeholder="Ej. Gerente comercial" 
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}  
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Campo: Número de télefono */}
                  <div className="mb-3">
                    <label htmlFor="landingPhone" className="form-label text-light small fw-medium">Núumero de télefono</label>
                    <input 
                      type="text" 
                      className="form-control text-dark form-focus-custom" 
                      id="landingPhone" 
                      placeholder="+ 52 5555555555" 
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}  
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Campo: Qué Necesita */}
                  <div className="mb-3">
                    <label htmlFor="landingService" className="form-label text-light small fw-medium">¿En qué estás interesado?</label>
                    <select 
                      className="form-select text-dark-50 form-focus-custom" 
                      id="landingService" 
                      onChange={manejarCambioSelect}
                      defaultValue={""}
                      required
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px' }}
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="desarrollo">Desarrollo web</option>
                      <option value="micro">Microservicios</option>
                      <option value="D365">Microsoft Dynamics 365</option>
                      <option value="pruebas">Automatización de Pruebas (QA)</option>
                      <option value="infra">Infraestructura en la nube</option>
                    </select>
                  </div>

                  {/* Campo: Mensaje / Detalles */}
                  <div className="mb-4">
                    <label htmlFor="landingMessage" className="form-label text-light small fw-medium">Cuéntanos brevemente sobre tu proyecto</label>
                    <textarea 
                      className="form-control text-dark form-focus-custom" 
                      id="landingMessage" 
                      rows={3} 
                      placeholder="Tengo una idea para una app / Necesito automatizar pruebas para..."
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}  
                      style={{ backgroundColor: 'rgb(241, 244, 245)', border: '1px solid #002266', padding: '12px', borderRadius: '8px', resize: 'none' }}
                    ></textarea>
                  </div>

                  {/* Botón de Envío Redondeado */}
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 rounded-pill py-3 fw-bold text-uppercase tracking-wider transition"
                    style={{ backgroundColor: '#0055ff', border: 'none', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0, 85, 255, 0.3)' }}
                  >
                    Contactanos
                  </button>
                </form>
              </div>
            </div>

          </div>
    
      </section>
    
    </>
  )
}

export default FormLanding