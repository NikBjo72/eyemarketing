import React, { useContext } from 'react';
import './login.css';
import propTypes from "prop-types";
import BackgroundStatusContext from './Background/background-status-context';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loginTries: false
        }
    }
    emailOnChangeHandler = (e) => {
        this.setState({email: e.target.value}, () => this.checkPassword())
    }

    passwordOnChangeHandler = (e) => {
        this.setState({password: e.target.value}, () => this.checkPassword())
    }

    componentDidMount(){
        this.props.clearLoSt();
    }

    componentWillUnmount(){
        this.context.changeBackgroundStatus(false);
    }

    checkPassword = () => {
        if (this.state.password == this.props.password && this.state.email == this.props.email) {
            return true
        } else {
            return false
        }
    }

    sendLoginAnswer = () => {
        if (!this.checkPassword()){
            this.setState({loginTries: true})
            return false;
        } else {
            this.context.changeBackgroundStatus(false);
            return true;
        }
    }

    renderErrorMessage = () => {
        return <small id="errorMessage">Fel användarnamn eller lösenord</small>
    }

    render() {
        return (
            <div id="loginContainer">
                <div id="form">
                    {this.state.loginTries ? this.renderErrorMessage() : null }
                    <input onChange = {this.emailOnChangeHandler} value = {this.state.email} type="email" placeholder='E-post'/>
                    <input onChange = {this.passwordOnChangeHandler} value = {this.state.password} type="password" placeholder='Lösenord'/>
                    <button onClick = {(e) => this.props.onClick(this.sendLoginAnswer())} id="loginBtn">Logga in</button>
                </div>
            </div>
        );
    }
};
Login.propTypes = {
    onClick: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    clearLoSt: propTypes.func,
}
Login.contextType = BackgroundStatusContext;
export default Login;