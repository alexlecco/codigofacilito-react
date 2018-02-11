import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor() {
    super();
    this.nombre = "Alex Lecco a secas";
  }

  render() {
    return(
      <h1>Hola { this.nombre }</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);

// npm install --save-dev babel-core
