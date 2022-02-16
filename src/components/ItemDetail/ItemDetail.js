import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props)=>{
    const onAdd = (parametro)=>{
        console.log(parametro)
    };
    return(
<div className="descriptionProduct" >
<h1>{props.title}</h1>
<h1>precio: {props.price}</h1>
<h1>Descripcion: {props.description}</h1>
<img src={props.pictureUrl} alt={props.title} ></img>
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
</div>
    );
};

export default ItemDetail