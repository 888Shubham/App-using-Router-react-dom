import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails(){
    const {ID} = useParams();
    const item = ITEMS.find((item)=> item.id === ID);
    return(
        <>
        <main><h1>ItemDetails</h1></main>
        <h2>{item.title}</h2>
        <h2>{item.detail}</h2>
        </>
    )
}

export default ItemDetails;