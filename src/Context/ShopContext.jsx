import React, {createContext, useState} from "react";
import {all_product} from "../Components/Assets/all_product";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }

    return cart;
}

export default function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + 1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - 1}));
    }

    const contextValue = {all_product, cartItems, addToCart ,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}