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
          const shelfItems = items.filter(item => item.shelf === shelf.type);
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ItemShelf items={shelfItems}  />
              </div>
            </div>
          );
        })}
      </div>  
    )
}

export default ItemList;