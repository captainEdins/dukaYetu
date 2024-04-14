import React from 'react';
import './NewCollection.css'
import {new_collections} from "../Assets/new_collections";
import Item from "../Item/Item";

export default function NewCollection(){
    return(
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item,index)=>{
                    return <Item key={index} items={item} />
                })}
            </div>
        </div>
    );
}