import CustomizedBadges from './CartWidget/CartWidget.js'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <div className="menu">
            <Link to='/' className='logo'><h1>Gea Trader</h1></Link>
            <div>
                <ul className="listaNav">
                    <Link to='/category/1' className='categorias'><li>Autor</li></Link>
                    <Link to='/category/2' className='categorias'><li>Punax</li></Link>
                    <Link to='/' className='categorias'><li>Contacto</li></Link>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Serch"></input>
                <button className="butSerch">Serch</button>
            </div>
            <CustomizedBadges />
        </div>
    );
}

export default NavBar;