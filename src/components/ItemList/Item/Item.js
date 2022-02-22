import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = (props)=>{
    return(
<div className="card">
<h1>{props.title}</h1>
<h1>{props.price}</h1>
<img src={props.pictureUrl} alt={props.title} ></img>
<Link to={`/item/${props.id}`}><button className='butVerMas'>Ver mas</button></Link>
</div>
    );
};

export default Item