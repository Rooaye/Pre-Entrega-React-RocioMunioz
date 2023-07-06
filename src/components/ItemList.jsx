import { Item } from "../components/Item"


export const ItemList = ({products}) =>{
    products.map(prod => <Item key={prod.id} prod={prod} />)
}