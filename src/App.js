import './App.css';
import { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Componente1 from './componentes/Componente1';
import Componente2 from './componentes/Componente2';
import Componente3 from './componentes/Componente3';
import Componente4 from './componentes/Componente4';

class App extends Component{
  render(){
  return (
    <Fragment>
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <Componente4/>
    </Fragment>
  );}
}

export default App;
