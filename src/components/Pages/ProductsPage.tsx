import Products from "../Products";
import {products} from "../../data/products";

const ProductsPage = () => {
    return (
        <>
            <h1 className="title">Products</h1>
            <div className="app__products">
                {products.map(product => <Products product={product} key={product.title}/>)}
            </div>
        </>

    );
};

export default ProductsPage;