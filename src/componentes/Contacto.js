import React, { Component } from "react";
import { Row,Col} from 'react-bootstrap';

class Contacto extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <h2 id="tituloContacto"><strong>¿Necesitas ayuda o tenes alguna consulta?</strong></h2>
        </Col>
        <Col lg={12}>
          <p id="subtituloContacto">
          Es importante que sepas que sólo somos un sitio web de clasificados.<strong>No nos hagas consultas
respecto a información de los vehículos que se publican en el portal.</strong>  Éstas son responsabilidad
exclusiva de sus anunciantes, y debes contactarlos desde la ficha de cada vehículo. 
          </p>
        </Col>

        <Col lg={12}>
          <p id="subtituloContacto">
          ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o sugerencias a
 consultas@atodomotor.com.ar, te responderemos a la brevedad.
          </p>
        </Col>
     
      </Row>
    );
  }
}

export default Contacto;
