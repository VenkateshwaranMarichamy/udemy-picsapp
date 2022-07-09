import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList'
import unsplash from './api/unsplash';

class App extends React.Component {

  state = {images:[]};

  onSearchSubmit = async text => {
    console.log(text);
    const response = await unsplash.get('/search/photos',{
      params: {query: text }
    });
    console.log(response);

    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  };
}

export default App;
