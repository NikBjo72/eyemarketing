import React, { useState, useEffect, useRef,  } from 'react';
import './home.css';
import {url} from '../../Helpers/images';
import Ad from '../ad';

const Home = (props) => {


    return (
        <div id="container" className={"row"}>
            <Ad imageUrl={url.eyeLogo} heading="Kom igång med Eye Marketing!" btnText="Gå på rundtur" adText="Känner du dig osäker på hur Eye Marketing funkar? Inga problem! Här tar vi dig med på en rundtur i applikationen och visar dig alla smarta funktioner. Nu kör vi!"/>
            <Ad imageUrl={url.visitkort} heading="Vi gör dina visitkort inom en timme!" btnText="Beställ här" adText="Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur."/>
        </div>
    );
}
export default Home