import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
const ItemListContainer = (props) =>{
    return(
<div className="productos">
<p>{props.greeting}</p>
<ItemCount />
</div>  );
};

export default ItemListContainer