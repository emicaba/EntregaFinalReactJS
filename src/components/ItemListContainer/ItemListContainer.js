import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import Products from '../../API/productos';

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

const onAdd = (parametro)=>{
        console.log(parametro)
    };
return(
<div className="productos">
<p>{props.greeting}</p>
<ItemList products={products} />
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
</div>  );
};

export default ItemListContainer