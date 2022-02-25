import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'

const Cart = () => {

    const test = useContext(CartContext);

    return(
        <>
            <div className="carrito1">
                <h1>TU CARRITO</h1>
                <button onClick={test.clear} className="cartButton">Borrar carrito</button>
            </div>
            {
                test.cartList.map(item => (
                    <div className="cart">
                        <img src={item.pictureUrl} alt={item.title}></img>
                            <div>
                                <h2 className="cart2">Producto: {item.title}</h2>
                                <h2 className="cart2">Cantidad: {item.qty}</h2>
                                <h2 className="cart2">Precio: {item.price}</h2>
                            </div>
                        <button className="cartButton" onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
                    </div>
        ))}
        </>
    );
};

export default Cart