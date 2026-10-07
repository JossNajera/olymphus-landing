import olymphusLogo from '../assets/logo/logo.png'
import platformLogo from '../assets/logo/Power_Platform.png'
import D365 from '../assets/logo/D365_Sales.png'
import web from '../assets/logo/web.png'
import QA from '../assets/logo/QA.png'
import cloud_serv from '../assets/logo/cloud_serv.png'

const Footer = () => {
  return (
    <>
            <footer className="w-100 py-4 px-4 bg-transparent" style={{ borderTop: '1px solid rgba(0, 85, 255, 0.2)', fontFamily: '"Segoe UI", sans-serif' }}>
      <div className="container-fluid">
        <div className="row align-items-center g-4 text-white">
          
          {/* Bloque 1: Logotipo y Eslogan */}
          <div className="col-xl-3 col-md-6 d-flex align-items-center justify-content-center justify-content-xl-start">
            <div className="d-flex align-items-center">
            
              <div>
                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                                    src={olymphusLogo}
                                    alt="Olymphus TI Logo" 
                                    className="img-fluid" 
                                    style={{ maxHeight: '100px', objectFit: 'contain' }} 
                                  />
                </h3>
                <span className="text-uppercase text-muted" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                  Tecnologías que impulsan tu negocio
                </span>
              </div>
            </div>
          </div>

          {/* Bloque 2: Datos de Contacto */}
          <div className="col-xl-3 col-md-6 border-xl-start border-secondary border-opacity-25 ps-xl-4 d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <span className="text-info small fw-semibold mb-2" style={{ color: '#00a2ff', fontSize: '0.8rem' }}>Ubicación</span>
            
            {/* Correo */}
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-location-dot"></i>
              <a  className="text-white-50 text-decoration-none small">
                Pachuca de soto, Hidalgo.
              </a>
            </div>

          </div>

          {/* Soluciones */}
          <div className="col-xl-3 col-md-6 border-xl-start border-secondary border-opacity-25 ps-xl-4 d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <span className="text-info small fw-semibold mb-2" style={{ color: '#00a2ff', fontSize: '0.8rem' }}>Soluciones</span>
                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={platformLogo}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Power Platform
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={D365}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    CRM
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={web}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Desarrollo Web
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={QA}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Automatización de Pruebas (QA)
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={cloud_serv}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Infraestructura en la nube
                  </span>
              </h3>
          </div>

          {/* Bloque 3: Perfil Profesional */}
          {/* <div className="col-xl-3 col-md-6 border-xl-start border-secondary border-opacity-25 ps-xl-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-center border border-2 rounded-circle me-3" style={{ width: '45px', height: '45px', borderColor: '#0055ff' }}>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="position-relative pb-2">
              <span className="fw-semibold text-white small">Ing. Jose Luis Najera</span> */}
              {/* Línea decorativa azul inferior */}
              {/* <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#0055ff' }}></div>
            </div>
          </div> */}

          {/* Bloque 4: Redes Sociales / Enlaces */}
          <div className="col-xl-3 col-md-6 border-xl-start border-secondary border-opacity-25 ps-xl-4 d-flex align-items-center justify-content-center justify-content-md-end gap-3">
          
          <div className='row'>

            <div className='col'>

            <span className="text-info small fw-semibold mb-2" style={{ color: '#00a2ff', fontSize: '0.8rem' }}>Conócenos</span>
            </div>

            <div className='col-md-12'>

            {/* Facebook */}
            <a href="https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr" className="text-white text-decoration-none fs-4 transition-all mx-2" style={{ color: '#0a66c2' }}>
              <i className="bi bi-facebook"></i>
            </a>
            {/* LinkedIn */}
            {/* <a href="#" className="text-white text-decoration-none fs-4 transition-all mx-2" style={{ color: '#0a66c2' }}>
              <i className="bi bi-linkedin"></i>
            </a> */}
            {/* GitHub */}
            {/* <a href="#" className="text-white text-decoration-none fs-4 mx-2">
              <i className="bi bi-github"></i>
            </a> */}
            {/* Sitio Web / Red Global */}
            <a href="#" className="text-white text-decoration-none fs-4 mx-2">
              <i className="bi bi-globe"></i>
            </a>
            </div>

          </div>
           
            
          </div>

        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer