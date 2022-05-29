import React, { useState, useEffect, useRef,  } from 'react';
import propTypes from 'prop-types';
import './ad.css';

const Ad = (props) => {


    return (
        <div id="adContainer">
            <h1 id="heading">{props.heading}</h1>
            <img id="adImg" src={props.imageUrl} />
            <div id="adText">{props.adText}</div>
            <button onClick={() => {alert('Beställning gjord!')}} id="btn">{props.btnText}</button>
        </div>
    );
}
export default Ad
Ad.propTypes = {
    imageUrl: propTypes.string.isRequired,
    heading: propTypes.string.isRequired,
    adText: propTypes.string.isRequired,
    btnText: propTypes.string.isRequired,
 }
