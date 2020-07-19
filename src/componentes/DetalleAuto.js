import React, { Component } from 'react';
import { Container, Row, Col,Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

class DetalleAuto extends Component {

    state={
        auto: []
    }

    componentDidMount() {
        this.getOne();
      }
     
      async getOne() {
        fetch("/autos.json")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            
            let autoEncontrado  = res.find(
              (auto) => auto.localidad === this.props.match.params.id
            );
            this.setState({
                auto: autoEncontrado,
            });
          });
      }  

    render() {
        console.log(this.state.auto);
        // "marca": "Nissan",
		// "modelo": "TIIda 2013 ",
		// "localidad": "Tupungato",
		// "imagen": "9.jpg",
		// "anio": "2013",
		// "precio": "265000"

        return (
            <Container className="mt-5">
            <Row>
            <Col lg={12}>
                <strong>Marca :</strong> {this.state.auto.marca}
            </Col>
              <Col lg={12}>
              <img src={"/img/" + this.state.auto.imagen} alt={this.state.auto.imagen} />
              </Col>
              <Col lg={12}>
            <strong>Modelo :</strong> {this.state.auto.modelo} 
            </Col>
              <Col lg={4}>
               {this.state.auto.precio === '0' ?
                 <p id="NoprecioAuto"><strong>Consultar Precio</strong></p>
                :
                <p id="precioAuto"><strong>$ {this.state.auto.precio}</strong></p>
                }  
              
              </Col>
              <Col lg={2}>
                <strong>Localidad : {this.state.auto.localidad}</strong>
               
              </Col>
              <Col lg={2}>
               
                <strong> Anio : {this.state.auto.anio}</strong>
              </Col>
              <Col lg={4}>
              <Link to="/home/All"><Button > Volver </Button></Link>
              </Col>
            </Row>
            </Container>
        );
    }
}

export default DetalleAuto;