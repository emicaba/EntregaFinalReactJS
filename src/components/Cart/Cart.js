import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import { serverTimestamp, collection, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import db from "../../firebaseConfig";

const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () =>{
        let order = {
            buyer:{
                email:"emicaba@hotmail.com",
                name:"Emiliano Cabaña",
                phone:"1135105376",
            },
            date: serverTimestamp(),
            items: test.cartList.map((it)=>{return {id:it.id, price:it.price, title: it.title, qty: it.qty};
        }),
        total: test.totalFinal()
        }
        console.log(order);

        const createOrderInFireStore = async () =>{
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFireStore()
        .then((result) => {
            alert('your order has been created: ' + result.id);
            test.cartList.map(async(item) =>{
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.qty)
            })
        })
            test.clear();
        })
        .catch(error => console.log(error));
    };

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
                    <button onClick={createOrder} className="seguirComprando">Create order</button>
                </div>
            }
        </>
    );
};

export default Cart