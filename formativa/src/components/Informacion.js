import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InformacionPrincipal() {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src='/assets/Inf_Tecnologia.jpg' style={{ width: '100%', height: '100%', border: '3px solid #007bff' }} ></img>
                </div>

                <div className='col-lg-6'>
                    <h3>PC Andes: Empresa chilena dedicada a la venta y distribución de componentes</h3>
                    <p>Fundada en 2018 en Temuco, comenzó como un emprendimiento universitario orientado a ofrecer asesoría tecnológica y productos de calidad a precios competitivos. Con el tiempo, la empresa ha crecido y consolidado su presencia en línea, sin embargo, detectó que muchos clientes deseaban cotizar el armado de un PC completo antes de comprar, lo cual implicaba un proceso lento y dependiente del contacto manual con vendedores.</p>
                    <a href='https://www.duoc.cl' className='btn btn-primary'>Ver detalles</a>


                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="/assets/procesadores.jpg" />
                        <Card.Body>
                            <Card.Title>Procesadores INTEL/AMD</Card.Title>
                            <Card.Text>
                            Intel Core destaca en la velocidad de un solo núcleo y rendimiento gaming. AMD Ryzen ofrece más núcleos, siendo superior en productividad y con una excelente relación precio-rendimiento. Ambos usan zócalos (sockets) incompatibles entre sí.
                            </Card.Text>
                            <Button variant="primary">Visitar</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
                
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="/assets/memorias_ram.webp" />
                        <Card.Body>
                            <Card.Title>Memorias Ram DDR4/5</Card.Title>
                            <Card.Text>
                            La DDR4 es la memoria estándar (hasta 3200 MHz), económica y estable. La DDR5 es la generación actual, más rápida (4800+ MHz) y eficiente, siendo indispensable para plataformas modernas. Ambas son totalmente incompatibles; la placa base solo soporta un tipo.
                            </Card.Text>
                            <Button variant="primary">Visitar</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="/assets/SSD NVM2.jpg" />
                        <Card.Body>
                            <Card.Title>Discos SSD NVM2</Card.Title>
                            <Card.Text>
                            La SSD SATA es la opción básica con una velocidad máxima de ~600 MB/s. La SSD NVMe (M.2) utiliza PCIe para alcanzar velocidades drásticamente superiores (desde 3.500 MB/s). NVMe es el estándar para gaming y edición de alto rendimiento.
                            </Card.Text>
                            <Button variant="primary">Visitar</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </div>
        

    );
}


export default InformacionPrincipal;