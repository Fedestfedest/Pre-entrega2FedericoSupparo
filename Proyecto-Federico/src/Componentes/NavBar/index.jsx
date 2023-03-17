import CardWidget from "../CardWidget";
import "./navbar.css"
import {NavLink} from "react-router-dom";

function NavBar({setState, state}) {
const sumar = () => {
setState(state + 1)
}
const restar = () => {
    setState(state - 1)
}
return <div className="Navbar">
<img src="" alt="" />
<ul>
<li><button>Shoes</button></li>
<li><button>Pants</button></li>
<li><button>Lista 3</button></li>
<li><button onClick={sumar}>Agregar un valor</button></li>
<li><button onClick={restar}>Eliminar un valor</button></li>
</ul>
<CardWidget/>
</div>
}



export default NavBar;