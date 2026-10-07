import desarrolloImg from '../assets/logo/desarrollo.png'
import microImg from '../assets/logo/microservicio.png'
import segImg from '../assets/logo/desarrollo.png'
import cloudImg from '../assets/logo/cloud.png'
import dynamics from '../assets/logo/Dynamics.png'

const Servicios = ({onContactClick2} ) => {
  return (
    <>    

    <div className="container-fluid max-width-container servicios-section">
      
      <div className="row mb-2 servicios-row">
        <div className="col-12">
          <h2 className="services-title text-light ">Nuestros <span>Servicios</span></h2>
          <p className="services-subtitle">Soluciones profesionales para cada etapa de tu negocio</p>
        </div>
      </div>

      <div className="row g-4">
        
        <div className="col-xl-3 col-md-6">
          <div className="service-card">
            <div>

              <img src={desarrolloImg} alt="Desarrollo Web" className="card-icon" />
              <h3 className="card-title">Desarrollo Web</h3>
              <p className="card-text">Creamos sitios y aplicaciones web modernas, responsivas y optimizadas para ofrecer la mejor experiencia a tus usuarios.</p>
            </div>
            <div className="mt-4">
              <a onClick={onContactClick2} className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
                Saber más </a>
            </div>
          </div>
        </div>

        {/* <div className="col-xl-3 col-md-6">
          <div className="service-card">
            <div>
              <img src={microImg} alt="Microservicios" className="card-icon" />
              <h3 className="card-title">Microservicios</h3>
              <p className="card-text">Diseñamos arquitecturas escalables, flexibles y resilientes que permiten a tu negocio crecer sin límites.</p>
            </div>
            <div className="mt-4">
              <a onClick={onContactClick2} className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
                Saber más</a>
            </div>
          </div>
        </div> */}

        <div className="col-xl-3 col-md-6">
          <div className="service-card">
            <div>
              <img src={cloudImg} alt="Infraestructura en la Nube" className="card-icon" />
              <h3 className="card-title">Infraestructura en la Nube</h3>
              <p className="card-text">Implementamos y gestionamos soluciones en la nube seguras, escalables y optimizadas para tu negocio.</p>
            </div>
            <div className="mt-4">
              <a onClick={onContactClick2}  className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
                Saber más</a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="service-card">
            <div>
              <img src={segImg} alt="Calidad de la Aseguranza" className="card-icon" />
              <h3 className="card-title">Calidad de la Aseguranza (QA)</h3>
              <p className="card-text">Garantizamos la calidad de tu software con pruebas automatizadas para asegurar rendimiento, seguridad y confiabilidad.</p>
            </div>
            <div className="mt-4">
              <a onClick={onContactClick2}  className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
                Saber más</a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="service-card">
            <div>
              <img src={dynamics} alt="Calidad de la Aseguranza" className="card-icon" />
              <h3 className="card-title">Dynamics 365 CRM</h3>
              <p className="card-text">Mejoramos y automatizamos los procesos para optimizar la gestión de ventas con tus clientes potenciales.</p>
            </div>
            <div className="mt-4">
              <a onClick={onContactClick2}  className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
                Saber más</a>
            </div>
          </div>
        </div>


      </div>
    </div>


 
    </>
  )
}

export default Servicios