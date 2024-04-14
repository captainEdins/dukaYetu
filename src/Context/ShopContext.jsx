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

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0){
              //  totalItem += cartItems[item];
                totalItem ++;
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems, addToCart,removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}