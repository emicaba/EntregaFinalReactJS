import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import customFetch from './customFetch'
const {Products} = require('../API/productos.js');

const ItemListContainer = () =>{

const [products, setProducts] = useState([]);
const {idCategory} = useParams();

useEffect(()=> {
    if(idCategory === undefined){
        customFetch(2000, Products)
            .then(result=> setProducts(result))
            .catch(err => alert("ERROR"));
    } else{
        customFetch(2000, Products.filter(item => item.categoryId === parseInt(idCategory)))
            .then((result)=> setProducts(result))
            .catch(err => alert("ERROR"));
    }
}, [idCategory]);

return(
<div className="productos">
<ItemList products={products} />
</div>  );
};

export default ItemListContainer