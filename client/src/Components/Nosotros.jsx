import img_IA from '../assets/logo/trans_dig.png';


const Nosotros = ({onContactClick}) => {
  return (
    <>
            <section className="py-5 bg-transparent mt-3" style={{ color: '#ffffff', fontFamily: '"Segoe UI", sans-serif' }}>
      <div className="container-fluid px-4 nosotros-section mt-2">
        <div className="row g-5 align-items-center">
          
          {/* COLUMNA PRINCIPAL DE TEXTOS Y ACCIONES */}
          <div className="col-lg-6">
            
            {/* Título Principal */}
            <h2 className="display-4 fw-bold mb-4 text-white" style={{ maxWidth: '800px', lineHeight: '1.15' }}>
              Más de 5 años transformando empresas con nuestras soluciones
            </h2>
            
            {/* Descripción */}
            <p className="lead text-white mb-4" style={{ color: '#a0aec0', maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Innovamos la transformación digital de organizaciones públicas y privadas mediante las mejores practicas de desarrollo de software, servicios en la nube, ciberseguridad, automatización y servicios administrados.
            </p>

            {/* Etiquetas / Badges con Check Verdes */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <i className="bi bi-check2 text-success fw-bold"></i> Experiencia empresarial
              </span>
              <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <i className="bi bi-check2 text-success fw-bold"></i> Innovación aplicada
              </span>
              <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <i className="bi bi-check2 text-success fw-bold"></i> Soluciones escalables
              </span>
              <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <i className="bi bi-check2 text-success fw-bold"></i> Acompañamiento continuo
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <a onClick={onContactClick} href="#" className="btn btn-outline-light px-4 py-2.5 fw-semibold" style={{ borderRadius: '6px', border: '1px solid rgba(255,255,255,0.3)' }}>
                Hablar con un especialista
              </a>
            </div>

      </div>

      <div className="col-lg-6">
                <div className="mb-4 d-inline-block align-items-center">
                  <img 
                    src={img_IA}
                    className='img-aboutus'
                    alt="celebrity" 
                    style={{ maxHeight: '400px', objectFit: 'contain' }} 
                  />
                </div>
          </div>

            {/* MÓDULO DE TARJETAS NUMÉRICAS (MÉTRICAS) */}
            <div className="row g-3 mb-4">
              {/* Métrica 1: Años */}
              <div className="col-md-4">
                <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                  <h3 className="h4 fw-bold text-white mb-1">+5 años impulsando el crecimiento de negocios</h3>
                  <p className="text-muted small mb-0" style={{ color: '#718096' }}>Experiencia comprobada</p>
                </div>
              </div>
              
              {/* Métrica 2: Proyectos */}
              <div className="col-md-4">
                <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                  <h3 className="h4 fw-bold text-white mb-1">+250 proyectos exitosos</h3>
                  <p className="text-muted small mb-0" style={{ color: '#718096' }}>Implementaciones tecnológicas</p>
                </div>
              </div>

              {/* Métrica 3: Clientes */}
              <div className="col-md-4">
                <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                  <h3 className="h4 fw-bold text-white mb-1">+30 clientes satisfechos</h3>
                  <p className="text-muted small mb-0" style={{ color: '#718096' }}>Organizaciones atendidas</p>
                </div>
              </div>
            </div>

            {/* BANNER INFERIOR DE RELACIONES DE LARGO PLAZO */}
            <div className="p-4 rounded-3 d-flex gap-3 align-items-start" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
              <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(0, 162, 255, 0.15)', color: '#00a2ff' }}>
                <i className="bi bi-check-lg fw-bold"></i>
              </div>
              <div>
                <h4 className="h6 fw-bold text-info mb-1">Construimos relaciones a largo plazo</h4>
                <p className="small text-white mb-0" style={{ color: '#a0aec0', lineHeight: '1.5' }}>
                  Nuestro compromiso no termina con la implementación. Acompañamos la evolución tecnológica de nuestros clientes mediante innovación, mejora continua y servicios especializados.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(0, 162, 255, 0.15)', color: '#00a2ff' }}>
                <i className="bi bi-check-lg fw-bold"></i>
              </div>
              <div>
                <h4 className="h6 fw-bold text-info mb-1">Mejoramos los procesos y tecnologías del negocio</h4>
                <p className="small text-white mb-0" style={{ color: '#a0aec0', lineHeight: '1.5' }}>
                  Nos enfocamos en implementar las mejores herramientas para hacer crecer las tecnológias de nuestros clientes para la mejora de sus productos y servicios.
                </p>
              </div>
            </div>

          </div>


        </div>
  
    </section>
    </>
  )
}

export default Nosotros