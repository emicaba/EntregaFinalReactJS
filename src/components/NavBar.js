const NavBar = () => {
    return(
        <div className="menu">
            <h1><a href="/index">Gea Trader</a></h1>
            <div>
                <ul className="listaNav">
                    <li>
                        <a href="/index">Home</a>
                    </li>
                    <li>
                        <a href="/index">Products</a>
                    </li>
                    <li>
                        <a href="/index">About us</a>
                    </li>
                    <li>
                        <a href="/index">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Serch"></input>
                <button className="butSerch">Serch</button>
            </div>
        </div>
    );
}

export default NavBar;