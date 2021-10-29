import React from 'react';
import ItemShelf from './ItemShelf'
const ItemList = props => {
    const {items} = props;
    const shelfTypes = [
        { type: 'jacket', title: 'Jackets' },
        { type: 'bottom', title: 'Bottoms' },
        { type: 'tees', title: 'Tees' }
    ]
    return(
        <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfItems = Object.keys(items).filter(key => items[key].shelf === shelf.type);
          console.log(shelfItems)
          return (
            <div className="bookshelf" key={index} id="jacket">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ItemShelf shelfItems={shelfItems} items={items} />
              </div>
            </div>
          );
        })}
      </div>  
    )
}

export default ItemList;