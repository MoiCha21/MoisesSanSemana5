import './Componentes.css';
import { Component } from 'react';

class Componente2 extends Component{
  render(){
    const arreglo=["JavaScript","React JS"]
  return (
    <div className="App-Componente2">
      <p>Los siguientes lenguajes estan en un arreglo y son desplegados en una lista:</p> 
      <ul> 
        {arreglo.map((p,i)=><li key={i}>{p}</li>)} 
      </ul>
    </div>
  );}
}

export default Componente2;