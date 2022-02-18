import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = (props)=>{
    const onAdd = (parametro)=>{
        console.log(parametro)
    };
    return(
<div className="card">
<h1>{props.title}</h1>
<h1>{props.price}</h1>
<img src={props.pictureUrl} alt={props.title} ></img>
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
<Link to={`/item/${props.id}`}><button className='butVerMas'>Mas</button></Link>
</div>
    );
};

export default Item