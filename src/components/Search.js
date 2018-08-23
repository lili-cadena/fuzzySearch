import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);
        this.manageFilterChange = this.manageFilterChange.bind(this);
    }

    manageFilterChange(event) {
        this.props.onFilterChange(event.target.value);
    }

    render(){
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Search" 
                    value={this.props.filter}
                    onChange={this.manageFilterChange}
                />
            </form>
        )
    }
}

export default Search;