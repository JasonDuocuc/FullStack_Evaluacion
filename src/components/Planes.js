import React from "react";

function Planes() {
  return (
    <section id="sectionPlanes" style={{backgroundColor:'#f8f9fa'}}>
      <div className="container my-4">
        <h3 className="text-center my-3">Planes</h3>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-basico.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Básico</h5>
                <p>Ideal para comenzar con energía solar</p>
                <ul className="list-unstyled">
                  <li>Estimación de consumo</li>
                  <li>Equipo certificado</li>
                  <li>Instalación inicial</li>
                  <li>Garantía básica</li>
                </ul>
                <a href="#contacto" className="btn btn-dark mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-optimizado.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Optimizado</h5>
                <p>Equilibrio entre ahorro y rendimiento</p>
                <ul className="list-unstyled">
                  <li>Diseño personalizado</li>
                  <li>Inversor eficiente</li>
                  <li>Monitoreo básico</li>
                  <li>Garantía extendida</li>
                </ul>
                <a href="#contacto" className="btn btn-dark mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-autonomo.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Autónomo</h5>
                <p>Máxima independencia con respaldo</p>
                <ul className="list-unstyled">
                  <li>Integración con baterías</li>
                  <li>Monitoreo avanzado</li>
                  <li>Optimización por horarios</li>
                  <li>Soporte prioritario</li>
                </ul>
                <a href="#contacto" className="btn btn-dark mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;
