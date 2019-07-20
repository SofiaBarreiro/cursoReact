import React from 'react';
import './App.css';

function Form1(props) {

  return (
    <form action="">
      <table id='table1'>
        <tr colspan='3'><td>{props.mytext}</td></tr>
        <tr colspan='3'><td>{props.myText2}</td></tr>
        <tr><td><select name="" id="select1">
          <option value="Capitalización simple">Capitalización simple</option>
          <option value="Capitalización compuesta">Capitalización compuesta</option>
          <option value="Descuento">Descuento</option>
          <option value="Tasa efectiva">Tasa efectiva</option>
        </select></td></tr>
      </table>
    </form>);

}

class App extends React.Component{

  render(){
  return <div>this is my  componet; <Form1 mytext= "Bienvenido a la Calculadora Financiera" myText2 = 'Cuál es la operación que desea realizar?' /></div>

  }
}

// const App = () => <div>this is my componet <Form1/></div>// es lo mismo que el de abajo
// function App() {
//   return (<div>this is my  componet; <Form1 /></div>

//   );
// }

export default App;
