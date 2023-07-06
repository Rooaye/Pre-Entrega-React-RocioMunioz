import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";


import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";

import { useParams} from "react-router-dom";

export const ItemDetailContainer = props => {
  const [product, setProduct] = useState({})
  const {id} = useParams()
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then(result => {
        setProduct(result.find((item)=> item.id === parseInt(id)))
    });
  }, [id])
  
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