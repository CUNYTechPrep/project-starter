import React, { Component} from 'react';
import ItemList from './ItemList';
class SearchResult extends Component {
    render(){
        const { results } = this.props.location.state;
        const items = {}
        for(let i = 0; i < results.length; i++){
          const item = results[i];
          items[item.product_id] = item
        }
        return(
            <div> 
                <ItemList items={items}/>
            </div>
        )
    }
}

export default SearchResult;