import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);
        this.manageFilterChange = this.manageFilterChange.bind(this);
    }

    manageFilterChange(e) {
        this.props.onFilterChange(e.target.value);
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