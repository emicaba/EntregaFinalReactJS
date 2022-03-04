import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import db from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () =>{

const [products, setProducts] = useState([]);
const {idCategory} = useParams();

useEffect(()=> {
    const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        return querySnapshot.docs.map( document => ({
            id: document.id,
            ...document.data()
        }))
        }
firestoreFetch()
.then(result => setProducts(result))
.catch(error => console.log(error));
}, [idCategory]);

return(
<div className="productos">
<ItemList products={products} />
</div>  );
};

export default ItemListContainer;