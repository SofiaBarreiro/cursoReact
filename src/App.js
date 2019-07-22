import React from 'react';
import './App.css';


class Form1 extends React.Component {

  state = {
    show: true
  }
  render() {
    if (this.state.show === true) {
      return (
        <form action="">
          <table id='table1' >
            <tr colspan='3'><td>{this.props.mytext}</td></tr>
            <tr colspan='3'><td>{this.props.myText2}</td></tr>
            <tr><td><select onChange={() => this.setState({ show: false })}
              name="" id="select1">
              <option value="Capitalización simple">Capitalización simple</option>
              <option value="Capitalización compuesta">Capitalización compuesta</option>
              <option value="Descuento">Descuento</option>
              <option value="Tasa efectiva">Tasa efectiva</option>
            </select></td></tr>
          </table>
        </form>
      )
    } else {
      return (
        <form action="" id="form2">
          <table id="table2">
            <tr><td colSpan='3'>Operacion Seleccionada</td></tr>
            <tr><td colSpan='3'>¿Cuál es la variable que desea calcular?</td></tr>
            <tr ><select name="" id="select2" colspan='4' >
              <option value="" >Ganancias</option>
              <option value="" >Cap. Inicial</option>
              <option value="" >Tiempo</option>
              <option value="" >Interes</option>
            </select></tr>
            <tr>
              <td>Capital inicial</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Tiempo</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Interes</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Ganancias</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><button>Calcular</button></td>
              <td><button >Borrar</button></td>
              <td><button onClick={() => this.setState({ show: true })}>Volver</button></td>
            </tr>
          </table>
        </form>
      )
    }
  }
}



class App extends React.Component {

  render() {
    return (


      <div>this is my  component
        <Form1 mytext="Bienvenido a la Calculadora Financiera"
          myText2='Cuál es la operación que desea realizar?' />
      </div>
    )


  }
}

// const App = () => <div>this is my componet <Form1/></div>// es lo mismo que el de abajo
// function App() {
//   return (<div>this is my  componet; <Form1 /></div>

//   );
// }

export default App;
