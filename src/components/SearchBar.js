import React from 'react'

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value)
    }
    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label htmlFor="input">Image Search</label>
                    <input id="input"  type="text" onChange={this.onInputChange} />   
                </div>
            </form> 
        </div>
        );
    }
}

export default SearchBar
