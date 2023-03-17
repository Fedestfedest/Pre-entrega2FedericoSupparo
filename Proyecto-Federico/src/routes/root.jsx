import { useState} from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Componentes/NavBar"
import ItemListContainer from "../Componentes/ItemListContainer"
const Root =() => {
const [state, setState] = useState(0);
const params = useParams();
const isCategoryRoute = Boolean(params.id);
return (
<div>
<NavBar setState={setState} state={state}/>
<ItemListContainer isCategoryRoute={isCategoryRoute} category={params.id}/> 
</div>
)
}
export default Root;