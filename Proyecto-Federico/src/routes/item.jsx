import { useState } from "react";
import NavBar from "../Componentes/NavBar"
import ItemListContainer from "../Componentes/ItemListContainer"
const ItemRoot =() => {
const [state, setState] = useState(0)
return (
<div>
<NavBar setState={setState} state={state}/>
<ItemListContainer greeting="Productos buenos,bonitos y baratos" state={state}/> 
</div>
)
}
export default ItemRoot;