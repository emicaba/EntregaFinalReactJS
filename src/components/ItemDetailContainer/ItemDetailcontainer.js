import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const {idItem} = useParams();

      useEffect(() => {
        const makeRequest = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
            console.log("Producto no encontrado");
            }
        }
        makeRequest()
            .then(result => setProducts(result))
            .catch((error) => alert(error));
    }, [idItem])

             return(
                 <div>
                    <ItemDetail
                    id = {products.id}
                    title = {products.title}
                    price = {products.price}
                    description = {products.description}
                    pictureUrl = {products.pictureUrl}
                    />
                 </div>
             )
    };
export default ItemDetailContainer;