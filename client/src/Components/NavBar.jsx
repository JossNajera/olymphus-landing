
import olymphusLogo from '../assets/logo/logo.png'

const NavBar = ( { onContactClick, onServiciosClick3, onContactClick2 }) => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top pt-3 pb-3 px-4 border-bottom-custom mt-2 nav-cust">
 
  <a className="navbar-brand fw-bold text-white" href="#">
    <img src={olymphusLogo} alt="Logo" width="300" height="90" className="d-inline-block align-text-top me-2" />
  </a>

 
  <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 me-lg-4">
      <li className="nav-item">
        <a className="texto-brillo nav-link text-white active" aria-current="page" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a onClick={onServiciosClick3} className="texto-brillo nav-link text-white" href="#">Servicios</a>
      </li>
      <li className="nav-item">
        <a onClick={onContactClick2} className="texto-brillo nav-link text-white" href="#">Nosotros</a>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link text-white" href="#">Contacto</a> */}
      </li>
    </ul>

  
    <div className="d-flex">
      <a onClick={onContactClick} className=" texto-brillo-btn btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
        <i className="fa-solid text-info fa-rocket py-2"></i>
        Contáctanos</a>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar