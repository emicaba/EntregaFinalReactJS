import Item from './Item/Item';

const ItemList = (props)=>{
    return(
        <div className="flex">
            {props.products.map((p)=>{
                return(<Item key= {p.id} title={p.title} price={p.price} pictureUrl={p.pictureUrl}/>)
            })}
        </div>
    );
};
export default ItemList
