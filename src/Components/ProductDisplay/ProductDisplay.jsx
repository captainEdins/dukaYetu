import React, {useContext} from 'react';
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from "../../Context/ShopContext";

export default function ProductDisplay(props) {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="product-display-img">
                    <img className="product-display-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        Ksh {product.old_price}
                    </div>
                    <div className="product-display-right-price-new">
                        Ksh {product.new_price}
                    </div>
                </div>
                <div className="product-display-right-description">
                    Introducing the Horizon Blue Linen Shirt: a seamless blend of sophistication and comfort. Crafted
                    from high-quality linen fabric in a striking horizon blue hue, this shirt offers luxurious
                    breathability, perfect for any occasion.
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {
                    addToCart(product.id)
                }}>ADD TO CART
                </button>
                <p className="product-display-right-category">
                    <span>Category :</span>Women, T-Shirt, Crop Top
                </p>
                <p className="product-display-right-category">
                    <span>Tags :</span>Modern, Latest
                </p>
            </div>
        </div>
    )
}