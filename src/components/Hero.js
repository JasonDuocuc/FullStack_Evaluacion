

function Hero(){
    return(
    <section style={{backgroundImage:"url('/assets/Banner_fondo.webp')",backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',width:'100%',borderRadius:'10px'}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 text-center my-3">
                    <h3 style={{textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Energia solar accesible y confiable para tu hogar o pyme</h3>
                    <h4 style={{textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Reduce tus costos energeticos y contribuye a un futuro limpio</h4>
                    <a href="#demo_calculadora" class="btn btn-primary ms-3" style={{textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Ver DEMO</a>
                    <a href="/assets/catalogo-helioandes.docx" download class="btn btn-dark ms-3" style={{textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}><i class="bi bi-download"></i>Descargar Catálogo</a>
                </div>
            </div>
        </div>
            
           
    
    </section>

    /* <div className='row'>
        
        <div className='col-lg-12'>
            
            <img src='/assets/Banner_Fondo.webp' style={{ width: '100%'}}></img>

        </div>
    </div>*/



    );


}

export default Hero