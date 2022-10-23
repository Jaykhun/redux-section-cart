import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="app">
            <ul className="navbar">
                <li className="navbar__item">
                    <NavLink
                        className={({isActive}) => isActive ? 'activeBtn' : ''}
                        to="products">Products
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        className={({isActive}) => isActive ? 'activeBtn' : ''}
                        to="cart">Cart
                    </NavLink>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default Layout;