function Soluciones(){
  return(
    <section id="sectionSoluciones" className="my-5">
      <div className="container text-center">
        <h3 className="mb-4">Soluciones Solares</h3>
        <div className="row">
          
          <div className="col-12 col-md-3 mb-4">
            <div className="card h-100">
              <img src="/assets/kit_hogar.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Hogar 3–5 kW</h5>
                <p className="card-text">Sistemas residenciales ideales para reducir tus cuentas eléctricas y aprovechar la energía solar.</p>
                <a href="#" className="btn btn-dark">Solicitar asesoría</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="card h-100">
              <img src="/assets/Energia_solar_pyme.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Pyme 10–20 kW</h5>
                <p className="card-text">Soluciones diseñadas para pequeñas y medianas empresas con alto consumo energético.</p>
                <a href="#" className="btn btn-dark">Solicitar asesoría</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="card h-100">
              <img src="/assets/Kits_solares_con_baterías.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Off-grid con baterías</h5>
                <p className="card-text">Kits autosuficientes para zonas sin conexión a la red eléctrica, con almacenamiento energético.</p>
                <a href="#" className="btn btn-dark">Solicitar asesoría</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="card h-100">
              <img src="/assets/SISTEMA-HIBRIDO.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Híbridos</h5>
                <p className="card-text">Combinan conexión a red con respaldo de baterías, optimizando consumo y autonomía.</p>
                <a href="" className="btn btn-dark">Solicitar asesoría</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Soluciones;
