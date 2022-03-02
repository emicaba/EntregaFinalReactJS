import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

    const test = useContext(CartContext);

    return(
        <>
            <div className="carrito1">
                <h1>TU CARRITO</h1>
                <button onClick={test.clear} className="cartButton">Borrar carrito</button>
            </div>
            <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
            {
                test.cartList.length > 0 &&
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
         {test.cartList.length > 0 &&
                <div className="preciosFinales">
                    <p>Subtotal: {test.totales()}</p>
                    <p>Impuestos: {test.impuestos()}</p>
                    <h2>Total: {test.totalFinal()}</h2>
                </div>
            }
        </>
    );
};

export default Cart