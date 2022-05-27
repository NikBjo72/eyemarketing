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
            
            return <div id="outOfOrder">Tjänsten är tyvärr ur funktion!</div>
        }
        return this.props.children;
    }
}
export default AppErrorBoundary;