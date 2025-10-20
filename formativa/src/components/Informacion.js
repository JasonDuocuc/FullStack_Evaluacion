import React from 'react';
import Imagen_01 from '.assets/Tecnologia';

function InformacionPrincipal(){

    return(
        <div className='row'>
            <div className='col-lg-6'>
                <img src={Imagen_01} style={{width: '100%'}} ></img>
            </div>

            <div className='col-lg-6'>
                <h3>El software de RRHH líder en Latinoamérica</h3>
                <p>odo sayudsaopidusapidu saoidu saopdiu asoiuop posai udsaopidu sapoidua sdoisau dopsaiud aospidus apodiuasdoisau dosaiud osaidu asopid uaspoidusa pdoiasu doasiu apodiupoiaudodo sayudsaopidusapidu saoidu saopdiu asoiuop posai udsaopidu sapoidua sdoisau dopsaiud aospidus apodiuasdoisau dosaiud osaidu asopid uaspoidusa pdoiasu doasiu apodiupoiaudodo sayudsaopidusapidu saoidu saopdiu asoiuop posai udsaopidu sapoidua sdoisau dopsaiud aospidus apodiuasdoisau dosaiud osaidu asopid uaspoidusa pdoiasu doasiu apodiupoiaud</p>
                <a href='https://www.duoc.cl' className='btn btn-primary'>Ver detalles</a>
            </div>
        </div>
    );
}


export default InformacionPrincipal;