import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const ItemListContainer = (props) =>{
const onAdd = (parametro)=>{
        console.log(parametro)
    };
return(
<div className="productos">
<p>{props.greeting}</p>
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
</div>  );
};

export default ItemListContainer