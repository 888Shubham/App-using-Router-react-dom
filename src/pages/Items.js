import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
        <Link to = '/'>Back</Link>
      </main>
      <ul>
        {ITEMS.map((item)=>(<Link to ={`/items/${item.id}`}><li>{item.id}</li></Link>))}
        {/* <Link to ="/items/item-1"><li>Item-1</li></Link>
        <Link to ="/items/item-2"><li>Item-2</li></Link>
        <Link to ="/items/item-3"><li>Item-3</li></Link> */}
      </ul>
    </>
  );
}

export default Items;
