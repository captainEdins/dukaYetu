import React, {useContext} from "react";
import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import men_banner from "../Components/Assets/banner_mens.png";
import women_banner from "../Components/Assets/banner_women.png";
import kids_banner from "../Components/Assets/banner_kids.png";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

export default function ShopCategory(props) {

    const {all_product} = useContext(ShopContext);

    return (
        <div className="shop-categories">
            <img className="shop-categories-banner" src={props.category === "men" ? men_banner : props.category === "women" ? women_banner : kids_banner}
                 alt=""/>
            <div className="shop-category-index-sort">
                <p>
                    <span>Showing 1 - 12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shop-category-product">
                {all_product.map((item, index) => {

                    return props.category === item.category ?
                        <Item key={index}  items={item}/> : null;

                })}
            </div>
            <div className="shop-category-load-more">
                Explore More
            </div>
        </div>
    );
}