import React from 'react';

export class Login extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loginTries: false
        }
    }
    emailOnChangeHandler = (e) => {
        console.log('emailOnChangeHandler');
        this.setState({email: e.target.value}, () => this.checkPassword())
    }

    passwordOnChangeHandler = (e) => {
        console.log('passwordOnChangeHandler');
        this.setState({password: e.target.value}, () => this.checkPassword())

    }

    componentDidMount(){
        console.log("login did mount")
        this.props.clearLoSt();
    }

    componentWillUnmount(){
        console.log("login did unmount")
        this.props.background(false);
    }

    checkPassword = () => {
        console.log('checkPassword');
        if (this.state.password == this.props.password && this.state.email == this.props.email) {
            return true
        } else {
            return false
        }
    }

    sendLoginAnswer = () => {
        console.log('sendLoginAnswer');
        if (!this.checkPassword()){
            this.setState({loginTries: true})
            return false;
        } else {
            return true;
        }
    }

    renderErrorMessage = () => {
        console.log('renderErrorMessage');
        return <small id="errorMessage">Fel användarnamn eller lösenord</small>
    }

    render() {
        console.log('loginRender');
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