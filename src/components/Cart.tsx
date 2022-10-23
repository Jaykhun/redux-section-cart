import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {CartProps} from "../store/type";
import {decreaseProduct, deleteProduct, increaseProduct} from "../store/actions";

const Cart: React.FC<CartProps> = ({product}) => {
    const {id, price, image, title, count} = product
    const [InitialCount, setInitialCount] = useState(count)
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deleteProduct(id))
    }

    const onIncrease = () => {
        setInitialCount(InitialCount + 1)
        dispatch(increaseProduct(id))
    }

    const onDecrease = () => {
        if (InitialCount > 1) {
            setInitialCount(InitialCount - 1)
            dispatch(decreaseProduct(id))
        }
    }

    return (
        <div className="app__cart-item">
            <div className="cart-image"><img src={image} alt={title}/></div>
            <p className="cart-title">{title}</p>
            <div className="cart-buttons btn">
                <button onClick={onIncrease} className="btn-increase btn">+</button>
                <span className="cart-count">{InitialCount}</span>
                <button onClick={onDecrease} className="btn-decrease btn">-</button>
            </div>
            <p className="cart-price">{Math.floor(price * count)}$</p>
            <button onClick={onDelete} className="cart-delete btn">Delete</button>
        </div>
    );
};

export default Cart;