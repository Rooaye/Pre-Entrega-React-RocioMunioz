import { Item } from "../components/Item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};
