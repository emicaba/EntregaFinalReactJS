import { useState } from "react";
import './ItemCount.css';

const ItemCount = () =>{
    const [ProductosCarrito, setProductosCarrito] = useState(0);
    const increment = ()=>{
        if(ProductosCarrito !== 5 )
        setProductosCarrito(ProductosCarrito + 1)
    };
    const reduction = ()=>{
        if(ProductosCarrito !== 0 )
        setProductosCarrito(ProductosCarrito - 1)};
    return(
    <div className="productosCarrito">
        <p className="reductionIncrement" onClick={reduction}>-</p>
        <div className="contador">{ProductosCarrito}</div>
        <p className="reductionIncrement" onClick={increment}>+</p>
        <button className="botonAgregar">AGREGAR AL CARRITO</button>
    </div>);
};

export default ItemCount