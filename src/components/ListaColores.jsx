import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import ItemColor from "./ItemColor"

const ListaColores = ({arregloColores, borrarColor}) => {
    return (
        <ListGroup className="my-5">
            <Row>
                {
                    arregloColores.map((color, posicion) => <ItemColor key={posicion} nombreColor={color} borrarColor={borrarColor}></ItemColor>)
                }  
            </Row>
        </ListGroup>
    );
};

export default ListaColores;