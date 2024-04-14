import React from 'react';
import './RelatedProducts.css'
import Item from "../Item/Item";
import {data_product} from "../Assets/data";

export default function RelatedProducts() {
    return(
        <div className="related-products">
            <h1>Related Products</h1>
            <hr/>
            <div className="related-products-item">
                {data_product.map((item, index) => {
                    return <Item key={index}  items={item}/> ;
                })}
            </div>
        </div>
    );
}