import './Componentes.css';

function Componente1(){
  const semana="Semana 5"
  return (
    <div className="App-Componente1">
      <h1>{semana}</h1>
      <h6>Soy un componente tipo función que despliega una constante que dice "Semana 5"</h6>
    </div>
  );
}

export default Componente1;
