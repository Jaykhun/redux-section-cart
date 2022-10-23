import React, {useState} from 'react';
import {initialState, ProductsProps} from "../store/type";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../store/actions";

const Products: React.FC<ProductsProps> = ({product}) => {
    const {title, image, price, id, count} = product
    const products = useSelector<initialState, initialState>(products => products)
    const dispatch = useDispatch()
    const productExist = products.filter(product => product.id === id)

    const onAdd = () => {
        if (productExist.length < 1) {
            dispatch(addProduct({
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    count: count,
                })
            )
        } else alert('The Product already added')

    }

    return (
        <div className="app__product-item">
            <p className="product-title">{title}</p>
            <img src={image} alt={title}/>
            <p className="product-price">{price}$</p>
            <button className="btn-add btn"
                    onClick={onAdd}>
                {productExist.length > 0 ? 'Product added' : 'Add to cart'}
            </button>
        </div>
    );
};

export default Products;