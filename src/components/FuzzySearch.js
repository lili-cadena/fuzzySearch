import React from 'react';
import Search from './Search'
import List from './List'

class FuzzySearch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filter: '',
        };
        this.manageFilterChange = this.manageFilterChange.bind(this);
    }

    manageFilterChange(filter) {
        this.setState({
            filter: filter
        });
    }

    render(){
        return(
            <div>
                <Search
                    filter = {this.state.filter}
                    onFilterChange={this.manageFilterChange}
                />
                <List
                    transactions={this.props.transactions}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}

export default FuzzySearch;