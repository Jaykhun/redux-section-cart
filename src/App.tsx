import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductsPage from "./components/Pages/ProductsPage";
import CartPage from "./components/Pages/CartPage";
import Layout from "./components/Pages/Layout";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="products" element={<ProductsPage/>}/>
                        <Route path="cart" element={<CartPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;