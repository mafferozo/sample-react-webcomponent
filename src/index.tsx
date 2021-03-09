import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Sample extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    ReactDOM.render(<App/>, mountPoint);
  }
}

customElements.define('sample-webcomponent', Sample);