import React, {useContext} from 'react';
import './CartItems.css'
import {ShopContext} from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)

    return(
      <div className="cart-items">
          <div className="cart-items-format-main">
              <p>Product</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
          </div>
          <hr/>
          {all_product.map((item, index) => {
              if(cartItems[item.id] > 0){
                  return (
                      <div>
                      <div className="cart-items-format cart-items-format-main">
                          <img src={item.image} alt="" className="cart-icon-product-icon"/>
                          <p>{item.name}</p>
                          <p>Ksh {item.new_price}</p>
                          <button className="cart-items-quantity">{cartItems[item.id]}</button>
                          <p>Ksh {item.new_price * cartItems[item.id]}</p>
                          <img src={remove_icon} onClick={() => {
                              removeFromCart(item.id)
                          }} alt="" className="cart-items-remove-icon"/>
                      </div>
                      <hr/>
                  </div>
                  );
              }
              return null;
          })}
          <div className="cart-item-down">
              <div className="cart-item-total">
                  <h1>cart Totals</h1>
                  <div>
                      <div className="cart-item-total-item">
                          <p>Subtotal</p>
                          <p>Ksh {0}</p>
                      </div>
                      <hr/>
                      <div className="cart-item-total-item">
                         <p>Shipping Fee</p>
                         <p>Free</p>
                      </div>
                      <hr/>
                      <div className="cart-item-total-item">
                          <h3>Total</h3>
                          <h3>Ksh {0}</h3>
                      </div>
                  </div>
                  <button>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cart-item-promo-code">
                  <p>If you have a promo code, Enter it here</p>
                  <div className="cart-item-promo-box">
                      <input type="text" placeholder="promo code"/>
                      <button>Submit</button>
                  </div>
              </div>
          </div>
      </div>
    );
}