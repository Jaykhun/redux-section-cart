import React, {useState} from 'react';
import {ProductsProps} from "../store/type";
import {useDispatch} from "react-redux";
import {addProduct} from "../store/actions";

const Products: React.FC<ProductsProps> = ({product}) => {
    const {title, image, price, id, count} = product
    const [add, setAdd] = useState(false)
    const dispatch = useDispatch()

    const onAdd = () => {
        if (!add) {
            dispatch(addProduct({
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    count: count,
                })
            )
            setAdd(true)
        } else alert('The Product already added')

    }

    return (
        <div className="app__product-item">
            <p className="product-title">{title}</p>
            <img src={image} alt={title}/>
            <p className="product-price">{price}$</p>
            <button className="btn-add btn" onClick={onAdd}>{add ? 'Product added' : 'Add to cart'}</button>
        </div>
    );
};

export default Products;