import React from 'react';

export class Login extends React.Component {

    render() {
      return (
          <div id="loginContainer">
                <form>
                    <input type="email" id="inputEmail" name="email" placeholder='E-post adress'/>
                    <input type="password" id="inputPassword" name="password" placeholder='Lösenord'/>
                    <button id="loginBtn">Logga in</button>
                </form> 
          </div>
        
      );
    }

};