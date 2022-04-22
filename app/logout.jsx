import React from 'react';
import { ContentBrowser } from './content-browser';

export class Logout extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentWillUnmount(){
    console.log('logoutComponentWillOnmount');
    this.props.background(true);
  }

  render() {
    console.log('logoutRender');
    return (
      <div id="logout">
        <div id="logoutContainer">
              <button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button>
        </div>
        <ContentBrowser />
      </div>
    );
  }

};