import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';
import Auto from './Auto';

class NuestrosAutos extends Component {
    state={
        ListaAutos: [],
        
    };

    componentDidMount(){
        if(this.props.prop === 'Y'){
            this.getDestacado();
        }else if
        (this.props.prop=== 'All' 
        || this.props.prop=== null
        || this.props.prop=== undefined
         ) {
            this.getAll();
        } else{
            this.getBySearch();
        }
              
          
   
      }

      
    getAll= ()=> {
        fetch("/autos.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             this.setState({
                ListaAutos: response
             });
         })
         
    }

    getDestacado= ()=> {
        fetch("/autos.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             let autosFiltrados= [];
            response.filter(
                auto => {
                    if (auto.destacado === this.props.prop) {
                        autosFiltrados.push(auto)
                        
                    }
                }
            );
             this.setState({
                ListaAutos: autosFiltrados
             });
         })
         
    }

    getBySearch= ()=> {
        fetch("/autos.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             let autosFiltrados= [];
            response.filter(
                auto => {
                    if (auto.marca.toLowerCase().includes(this.props.prop)
                       || auto.modelo.toLowerCase().includes(this.props.prop)
                       || auto.anio.includes(this.props.prop)
                    ) {
                        autosFiltrados.push(auto)
                        
                    }
                }
            );
             this.setState({
                ListaAutos: autosFiltrados
             });
         })
         
    }

    render() {

        console.log(this.state.ListaAutos);
        return (
            <Row>
                <Col lg={12}>
        <p>{this.props.prop}</p>
                    <p id="tituloHome"><strong>A TODO MOTOR AUTOS</strong></p>
                </Col>
                <Col lg={12}>
                    <p id="subtituloHome"><strong>Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí ofertas en Efectivo de
concesionarios registrados. ¡Súper! </strong></p>
                </Col>

                <Col lg={12}>
                    <p id="Destacados"><strong>Destacados</strong></p>
                </Col>

                {this.state.ListaAutos.map(auto =>{
                    return(
                        <Col lg={3} key={auto.localidad}>
                        <Auto  autoProp={auto} />
                        </Col>
                    )

                })}
               
               

            </Row>
        );
    }
}

export default NuestrosAutos;