import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Auto extends Component {
  render() {
    const { marca, modelo, imagen, precio, localidad } = this.props.autoProp;

    return (
      <Row className="mt-5">
        <Col lg={12}>
          <img src={"/img/" + imagen} alt={imagen} />
        </Col>
        <Col lg={12}>
          <p id="marcaAuto">
            <strong>{marca}</strong>
          </p>
        </Col>
        <Col lg={12}>
          <p id="modeloAuto"><strong>{modelo}</strong></p>
        </Col>
        {precio === "0" ? (
          <Col lg={12}>
            <p id="NoprecioAuto"><strong>Consultar</strong></p>
          </Col>
        ) : (
          <Col lg={12}>
            <p id="precioAuto"><strong>$ {precio}</strong></p>
          </Col>
        )}

            <Col lg={12}>
            <Link to={"/detalle/" + localidad}><Button > Ver Mas... </Button></Link>
          </Col>    

      </Row>
    );
  }
}

export default Auto;
