import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = props => {
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then(result => {
        setProduct( result )
    });
  }, [])
  
  return (
    <Container className="mt-4">
      <h1>detalle</h1>
      {product.length === 0 ? (
        <div>cargando..</div>
      ) : (
        <ItemDetail prod={product} />
      )}
    </Container>
  );
};