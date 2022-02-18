import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from '../API/productos';
import customFetch from "../ItemListContainer/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const {idItem} = useParams();

      useEffect(() => {
        customFetch(2000, Products.filter(item => item.id === parseInt(idItem)))
            .then((result)=> setProducts(result))
            .catch(err => alert("ERROR"));
             }, [idItem])
             return(
                 <div>
                    <ItemDetail
                    title = {products.title}
                    price = {products.price}
                    description = {products.description}
                    pictureUrl = {products.pictureUrl}
                    />
                 </div>
             )
    };
export default ItemDetailContainer;