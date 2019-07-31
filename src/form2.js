import React from 'react';
import './App.css';


class Form2 extends React.Component {
    render() {

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
                            <td><button >Volver</button></td>
                        </tr>
                    </table>
                </form>
            )


    }

}

export default Form2;
