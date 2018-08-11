import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#000';

let defaultStyle = {
  color: defaultTextColor
};

let listStyle = {
  listStyle: 'none'
};

class Aggregate extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li style={listStyle}>Song 1</li>
          <li style={listStyle}>Song 2</li>
          <li style={listStyle}>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;