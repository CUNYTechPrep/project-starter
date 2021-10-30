import React, { Component} from 'react';
import ItemList from './ItemList';
class SearchResult extends Component {
    render(){
        const { results } = this.props.location.state;
        const { items } = this.props;
        let filterItems = [];
        
        console.log(items[results[0]])
        for (let i = 0; i < results.length; i++) {
            filterItems.push(items[results[i]])
        }
        return(
            <div> 
                <ItemList items={filterItems}/>
            </div>
        )
    }
}

export default SearchResult;