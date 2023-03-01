import './Componentes.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Componente4 extends Component{
  mensaje(){
    console.log("Ya le diste click")
  }
  render(){
  return (
    <div className="App-Componente4">
      <Button onClick={()=>this.mensaje()} variant="primary">No dar click</Button>
    </div>
  );}
}

export default Componente4;
