import React from 'react';
import ItemShelf from './ItemShelf'
const ItemList = props => {
    const {items} = props;
    const shelfTypes = [
        { type: 'jacket', title: 'Jackets' },
        { type: 'bottom', title: 'Bottoms' },
        { type: 'tee', title: 'Tees' },
        { type: 'accessory', title: 'Accessories'}
    ]
    return(
        <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfItems = Object.keys(items).filter(key => items[key].shelf === shelf.type);

          return (
            <div key={index} >
              {shelfItems.length >0 && 
                <div>
                  <h2>{shelf.title.charAt(0).toUpperCase() + shelf.title.slice(1)}</h2>
                  <div >
                    <ItemShelf shelfItems={shelfItems} items={items} />
                  </div>
                </div>}
            </div>
          );
        })}
      </div>  
    )
}

export default ItemList;