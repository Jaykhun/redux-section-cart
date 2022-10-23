import React from 'react';
import {useSelector} from "react-redux";
import {initialState} from "../../store/type";
import Cart from "../Cart";

const CartPage = () => {
    const products = useSelector<initialState, initialState>(products => products)
    return (
        <>
            <h1 className="title">Cart</h1>
            <div className="app__cart">
                {(products.length > 0)
                    ? products.map(product => <Cart product={product} key={product.title}/>)
                    : <p className="message">There no products</p>
                }
            </div>
        </>
    );
};

export default CartPage;