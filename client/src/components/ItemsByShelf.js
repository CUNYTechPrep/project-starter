import React from 'react';
import {
    useLocation
  } from "react-router-dom";
import ItemShelf from './ItemShelf';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ItemsByShelf = ({items}) => {
    let query = useQuery();
    const shelf = query.get("shelf");
    const shelfItems = Object.keys(items).filter(key => items[key].shelf === shelf);
    return(
        <div>
            <h2>{shelf}</h2>
            <div >
                <ItemShelf shelfItems={shelfItems} items={items} />
            </div>
      </div>
    )
}


export default ItemsByShelf;