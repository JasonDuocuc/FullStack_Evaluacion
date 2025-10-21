import React,{useState} from "react";
import {Table} from 'react-bootstrap';


function calcularCotizacion(){
    const [precioCPU,setPrecioCPU] = useState(0);
    const [precioGPU,setPrecioGPU] = useState(0);
    const [cantModulosRAM,setCantModulosRAM] = useState(0);
    const [tipoGarantia, setTipoGarantia] = useState('');
    const [descuento,setDescuento] = useState(0);


    const resultadoPrecioCPU = parseInt(precioCPU);
    const resultadoPrecioGPU = parseInt(PrecioGPU);
    const resultadoModulosRAM = parseInt(precioCPU);
    const resultadoTipoGarantiaU = parseInt(precioCPU);
    const resultadoDescuento = parseInt(precioCPU);

    
    return (

        <div>
            <div className='row mt-3'>
                <div className='col-lg-12 text-center bg-secondary text-white rounded p-3'>
                    <h3>Demo cálculo de remuneraciones</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    
                </div>

                <div className='col-lg-6'>
                    <h3 className='my-3'>Resultados</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sueldo imponible</td>
                                <td>{resultadoPrecioCPU.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>AFP</td>
                                <td>{resultadoPrecioGPU.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>AFP</td>
                                <td>{resultadoModulosRAM.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>AFP</td>
                                <td>{resultadoDescuento.toLocaleString()}</td>  
                            </tr>
                            <tr>

                            </tr>
                            <tr>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    );

}


export default calcularCotizacion;




