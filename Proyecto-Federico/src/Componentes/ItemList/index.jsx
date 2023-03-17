import Item from "../Item";

function ItemList ({productos}) {
    return (
        <div>
            <ul>
                {productos.map((productos, index) =>(
                    <Item productos ={productos} key={productos.id}/>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;