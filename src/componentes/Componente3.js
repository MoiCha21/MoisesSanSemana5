import './Componentes.css';
import { Component } from 'react';

class Componente3 extends Component{
  render(){
    const materia="Programacion Web"
  return (
    <div className="App-Componente3">

      <p>En este ejercicio vimos: </p>
      <ol>
        <li>Tipos de componentes</li>
        <li>Funciones y eventos</li>
        <li>Uso de varios componentes</li>
      </ol>     
    </div>
  );}
}

export default Componente3;