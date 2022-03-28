import CustomizedBadges from './CartWidget/CartWidget.js'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <div className="menu">
            <Link to='/' className='logo'><h1>Gea Trader</h1></Link>
            <div>
                <ul className="listaNav">
                    <Link to='/category/1' className='categorias'><li className='subtitulos'>Autor</li></Link>
                    <Link to='/category/2' className='categorias'><li className='subtitulos'>Punax</li></Link>
                    <Link to='/category/3' className='categorias'><li className='subtitulos'>Boreal</li></Link>
                </ul>
            </div>
            <Link to="./cart"> <CustomizedBadges /></Link>
        </div>
    );
}

export default NavBar;