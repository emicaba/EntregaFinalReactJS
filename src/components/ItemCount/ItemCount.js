import { useState } from "react";
import './ItemCount.css';

const ItemCount = (props) =>{

    const [ProductosCarrito, setProductosCarrito] = useState(props.initial);

    const increment = ()=>{
        if(ProductosCarrito !== props.stock )
        setProductosCarrito(ProductosCarrito + 1)
    };
    const reduction = ()=>{
        if(ProductosCarrito !== props.initial )
        setProductosCarrito(ProductosCarrito - 1)};


    return(

    <div className="productosCarrito">
        <p className="reductionIncrement" onClick={reduction}>-</p>
        <div className="contador">{ProductosCarrito}</div>
        <p className="reductionIncrement" onClick={increment}>+</p>
        <button className="botonAgregar" onClick={()=>props.onAdd(ProductosCarrito)}>AGREGAR AL CARRITO</button>
    </div>);
};

export default ItemCount