import React from 'react';

export class Logout extends React.Component {

    render() {
      return (
          <div id="logoutContainer">
                <button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button>
          </div>
      );
    }
};