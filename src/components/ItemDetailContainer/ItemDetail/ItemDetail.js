import './ItemDetail.css'
import ItemCount from "./ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../../Cart/CartButton';
import { CartContext } from '../../Cart/CartContext';


const ItemDetail = (props)=>{
    const [itemCount, setItemCount] = useState(0)
    const test = useContext(CartContext)

    const onAdd = (counter) => {
        alert("seleccionaste " + counter + " productos");
        setItemCount(counter);
        test.addToCart(props, counter);
    };
    return(
<div className="descriptionProduct" >
    <h1>{props.title}</h1>
    <h1>precio: {props.price}</h1>
    <h1>Descripcion: {props.description}</h1>
    <img src={props.pictureUrl} alt={props.title} ></img>
        {
            itemCount === 0
            ? <ItemCount stock = {5} initial = {itemCount} onAdd = {onAdd} />
            : <Link to={'/cart'}><CartButton /></Link>

            }
</div>
    );
};

export default ItemDetail