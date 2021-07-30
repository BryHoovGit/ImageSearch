import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos/', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID N0hj4SDf1e7CQ7gqyIUBZ2zXg7LlsffdUaIWlIt2Rqk'
            }
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App
