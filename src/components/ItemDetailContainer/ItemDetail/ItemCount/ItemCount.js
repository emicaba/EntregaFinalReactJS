import { useState } from "react";
import './ItemCount.css';

const ItemCount = (props) => {

    const [addCart, setAddCart] = useState(props.initial);

    const increment = ()=>{
        if(addCart !== props.stock )
        setAddCart(addCart + 1)
    };
    const reduction = ()=>{
        if(addCart !== props.initial )
        setAddCart(addCart - 1)};


    return(

    <div className="productosCarrito">
        <p className="reductionIncrement" onClick={reduction}>-</p>
        <div className="contador">{addCart}</div>
        <p className="reductionIncrement" onClick={increment}>+</p>
        <button className="botonAgregar" onClick={()=>props.onAdd(addCart)}>AGREGAR AL CARRITO</button>
    </div>);
};

export default ItemCount