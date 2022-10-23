import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {initialState} from "../../store/type";

const Layout = () => {
    const products = useSelector<initialState, initialState>(products => products)
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
                        to="cart">Cart (added {products.length} products)
                    </NavLink>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default Layout;