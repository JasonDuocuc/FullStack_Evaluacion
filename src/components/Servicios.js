function Servicios(){
  return(
    <section id="sectionServicios" className="my-5">
      <div className="container text-center">
        <h3 className="mb-4">Nuestros Servicios</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Estudio energético</h5>
                <p className="card-text">Analizamos tus consumos para ofrecerte la solución solar más eficiente.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Instalación certificada SEC</h5>
                <p className="card-text">Nuestros técnicos cuentan con certificación SEC para garantizar seguridad y cumplimiento normativo.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Monitoreo</h5>
                <p className="card-text">Supervisamos el rendimiento de tu sistema en tiempo real.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Mantención</h5>
                <p className="card-text">Realizamos revisiones periódicas para asegurar la máxima eficiencia del sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
