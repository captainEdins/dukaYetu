import React from 'react';
import './Item.css'
import {Link} from "react-router-dom";

export default function Item(props){

    const {items} = props;

    return(

      <div className='item'>
          <Link to={`/product/${items.id}`}><img onClick={window.scrollTo(0,0)} src={items.image} alt=""/></Link>
          <p>{items.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                  Ksh {items.new_price}
              </div>
              <div className="item-price-old">
                  Ksh {items.old_price}
              </div>
          </div>
      </div>
    );
}