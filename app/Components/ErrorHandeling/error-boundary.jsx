import React, { Component } from 'react';
import ErrorView from './error-view';

class ErrorBoundary extends Component {

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
            
            return <ErrorView />
        }
        return this.props.children;
    }
}
export default ErrorBoundary;