import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MenuDeOpciones from './componentes/MenuDeOpciones';
import Home from './componentes/Home';
import DetalleAuto from './componentes/DetalleAuto';
import Contacto from './componentes/Contacto';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
              
                <MenuDeOpciones/>
              
              <Switch>
                  <Route exact path="/" component ={Home} />
                  <Route exact path="/home" component ={Home} />

                  <Route exact path="/detalle/:id" component ={DetalleAuto} />
                  
                  <Route
                  exact
                  path="/redirect/:busqueda"
                  render={(props) => {
                    var search = props.match.params.busqueda;
                    return <Redirect to={"/home/" + search} />;
                  }}
                />
                <Route exact path="/home/:busqueda" component ={Home} /> 
                <Route exact path="/contacto" component ={Contacto} />
                  
              </Switch>
            </BrowserRouter>
          );
    }
}

export default Router;