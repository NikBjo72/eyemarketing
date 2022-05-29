import React, { useState, useEffect, useRef,  } from 'react';
import './components-error-view.css';
import cryingEye from '../../images/Eye-tear.svg';
import { Link } from "react-router-dom";


export const ErrorView = (props) => {

    const handleOnClick = (() => {
        setTimeout(() => {
            window.location.reload();
        },1)
    })

    return (
        <div id="errorViewContainer" className='text-white'>
            <div id="textSorry">Ledsen!</div>
            <div><img id='cryingEye' src = {cryingEye}/></div>
            <h3 id="contentTextOne">Tyvärr har något oväntat fel uppstått. Prova att uppdatera sidan med knappen nedan.</h3>
            <button onClick = {() => {window.location.reload()}} id="updateButton">Uppdatera sidan</button>
            <div>
            <h5 id="contentTextTwo">Funkar det inte att uppdatera sidan kan du gå till startsidan och fortsätta med andra delar av applikationen.</h5>
                <Link id="navLink" to="/"><button onClick = { handleOnClick } id="homeBtn">Till startsidan</button></Link>
            <h4 className="contentTextThree">Är det så illa att inte startsidan heller fungerar ber vi dig att skicka ett mail till:
                <a id='mailTo' onClick={(e) => {
                    window.location.href = 'mailto:error@eyemarketing.se';
                    e.preventDefault();
                    }}> error@eyamarketing.se </a>
            och beskriva felet.</h4>
            <h4 className="contentTextThree">Prova därefeter att stänga webbläsaren och gå in i webbapplikationen på nytt. Tack //Eye Marketing teamet.</h4>

            </div>
       </div>
    );
}
export default ErrorView