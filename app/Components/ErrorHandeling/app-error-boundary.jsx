import React, { Component } from 'react';
import './app-error-boundary.css';

class AppErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            
            return(
                <>
                    <div id="outOfOrderOne">Tjänsten är tyvärr ur funktion!</div>
                    <div id="outOfOrderTwo" className='text-white'>Stäng webbläsaren och försök igen om en stund så hoppas vi att applikationen är igång igen.</div>
                    <div id="outOfOrderThree" className='text-white'>Skicka gärna ett mail till oss och beskriv vad som hände, eller att applikationen inte funkar:
                    <a id='mailTo' onClick={(e) => {
                    window.location.href = 'mailto:error@eyemarketing.se';
                    e.preventDefault();
                    }}> error@eyamarketing.se </a>
                    <div id="updateBtnContainer"><button onClick = {() => {window.location.reload()}} id="updateButton">Prova att uppdatera sidan</button></div>
                    </div>  
                </>
            );
        }
        return this.props.children;
    }
}
export default AppErrorBoundary;