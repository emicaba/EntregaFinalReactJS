import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import Products from '../API/productos';

const ItemListContainer = (props) =>{

const [products, setProducts] = useState([]);
 const promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(promesa){
                    resolve();
                } else {
                    reject("ERROR");
                }
            }, 2000);
        }
    )

.then(()=> setProducts(Products))
.catch(() => alert("ERROR"));

return(
<div className="productos">
<p>{props.greeting}</p>
<ItemList products={products} />
</div>  );
};

export default ItemListContainer