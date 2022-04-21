import React from 'react';

export class Logout extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentWillUnmount(){
    this.props.background(true);
  }

  render() {
    return (
        <div id="logoutContainer">
              <button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button>
        </div>
    );
  }

};