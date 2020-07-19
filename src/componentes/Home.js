import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';
import NuestrosAutos from './NuestosAutos';
class Home extends Component {


    render() {

        
        return (
            <Row>
                <NuestrosAutos prop= {this.props.match.params.busqueda}/>
            </Row>
        );
    }
}

export default Home;