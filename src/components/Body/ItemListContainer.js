import './ItemListContainer.css'
const Productos = (props) =>{
    return(
<div className="productos">
<img src="https://http2.mlstatic.com/D_NQ_NP_787620-MLA41579258798_042020-O.webp" alt={props.resma}/><p>{props.resma}</p>;
<img src="https://http2.mlstatic.com/D_NQ_NP_748412-MLA42215035758_062020-O.webp" alt={props.resma2}/><p>{props.resma2}</p>
</div>  );
};

export default Productos