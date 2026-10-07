
const TopInfo = ({ onContactClick2, onServiciosClick }) => {
  return (
    <>
             <div className="row g-4 align-items-center">
      
      
      <div className="col-lg-6">
        <span className="text-info fw-bold text-uppercase tracking-wider d-block mb-2">Innovación Digital</span>
        <h1 className="display-5 fw-bold text-white mb-3">Tecnología que</h1>
        <h1 className="display-5 fw-bold text-info mb-3">Impulsa tu negocio</h1>
        <p className="text-white lead mb-1">
          Desarrollamos soluciones innovadoras, escalables
        </p>
        <p className="text-white lead mb-4">
          y seguras para llevar tu empresa al siguiente nivel.
        </p>
       
        <div className="d-flex gap-3 btns-info">
            <a onClick={onContactClick2} href="#" className="btn btn-primary rounded-pill px-4 py-3 fw-semibold">Hablanos de tu proyecto</a>
            <a onClick={onServiciosClick} href="#" className="btn btn-outline-light rounded-pill px-4 py-3 fw-semibold">Conoce nuestros servicios</a>
        </div>
      </div>

     
      <div className="col-lg-4">
        <div className="bg-image-column h-100 shadow-lg">
          
        </div>
      </div>

     
      <div className="col-lg-2">
        <div className="bg-transparent p-4 border border-primary border-opacity-25 rounded-4 h-100 card-list-info">
          <h2 className="h3 fw-bold text-info mb-1">¿Por qué elegir </h2>
          <h3 className="h3 fw-bold text-white mb-4">Olymphus TI? </h3>
          
     
          <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
            <li className="d-flex align-items-center gap-3">
              <span className="icon-circle shadow-sm">
                <i className="fa-solid fa-paper-plane"></i>
              </span>
              <span className="text-light fw-medium">Tecnología de vanguardia</span>
            </li>
            <li className="d-flex align-items-center gap-3">
              <span className="icon-circle shadow-sm">
                <i className="fa-solid fa-shield"></i>
              </span>
              <span className="text-light fw-medium">Seguridad y confianza</span>
            </li>
            <li className="d-flex align-items-center gap-3">
              <span className="icon-circle shadow-sm">
                <i className="fa-solid fa-square-poll-vertical"></i>
              </span>
              <span className="text-light fw-medium">Escalabilidad y rendimiento</span>
            </li>
            <li className="d-flex align-items-center gap-3">
              <span className="icon-circle shadow-sm">
                <i className="fa-solid fa-users"></i>
              </span>
              <span className="text-light fw-medium">Equipo experto a tu servicio</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default TopInfo