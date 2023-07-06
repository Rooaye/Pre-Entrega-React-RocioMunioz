import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  return (
    <Card style={{ width: "18rem" }} key={prod.id} className="float-start">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.categoria}</Card.Text>
        <Card.Text>{prod.precio}</Card.Text>
        <Link to={`/item/${prod.id}`}>
          <Button variant="primary">ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
