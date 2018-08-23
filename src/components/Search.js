import React from 'react';
import List from './List'

class Search extends React.Component{

    render(){
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Search" 
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        )
    }
}

export default Search;