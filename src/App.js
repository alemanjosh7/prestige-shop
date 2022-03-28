import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Products, Cart } from "./components";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Poppins',
                'sans-serif',

            ].join(','),
        },
    });

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
                    <Route path='/cart' element={<Cart cart={cart} />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
