import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import customFetch from "../ItemListContainer/customFetch";
import { useParams } from "react-router-dom";
const {Products} = require('../API/productos.js');

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const {idItem} = useParams();

      useEffect(() => {
        customFetch(2000, Products.find(item => item.id === parseInt(idItem)))
            .then((result)=> setProducts(result))
            .catch(err => alert("ERROR"));
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