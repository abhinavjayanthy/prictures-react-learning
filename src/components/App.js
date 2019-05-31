/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { listOfImages: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
    });
    this.setState({ listOfImages: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.listOfImages} />
      </div>
    );
  }
}

export default App;
