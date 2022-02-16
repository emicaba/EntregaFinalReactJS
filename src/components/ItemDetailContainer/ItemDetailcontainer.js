import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from '../API/productos';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
      useEffect(() => {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                if(true){
                    resolve(true);
                } else {
                    reject("KO")
                }
            }, 2000);
            })
        .then(() => setProducts(Products[0]))
        .catch((error) => console.log(error))
             }, [])
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