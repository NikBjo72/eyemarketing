import React, { useState, useEffect, useRef,  } from 'react';
import './error-view.css';
import cryingEye from '../../images/Eye-tear.svg';

export const ErrorView = (props) => {


    return (
        <div id="errorViewContainer" className='text-white'>
            <div id="textSorry">Ledsen!</div>
            <div><img id='cryingEye' src = {cryingEye}/></div>
            <h3 id="contentText">Tyvärr har något oväntat fel uppstått. Prova att uppdatera sidan med knappen nedan.</h3>
            <button onClick = {() => {window.location.reload()}} id="updateButton">Uppdatera sidan</button>
        </div>
    );
}
export default ErrorView