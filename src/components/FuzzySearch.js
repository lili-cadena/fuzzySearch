import React from 'react';
import Search from './Search'
import List from './List'

class FuzzySearch extends React.Component{

    render(){
        return(
            <div>
                <Search/>
                <List/>
            </div>
        )
    }
}

export default FuzzySearch;