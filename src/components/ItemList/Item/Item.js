import ItemCount from "../../ItemCount/ItemCount";

const Item = (props)=>{
    const onAdd = (parametro)=>{
        console.log(parametro)
    };
    return(
<div>
<h1>{props.title}</h1>
<h1>{props.price}</h1>
<img src={props.pictureUrl} alt="{props.title}" ></img>
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
</div>
    );
};

export default Item