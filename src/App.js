import React from 'react';
import SearchBar from './components/SearchBar';

class App extends React.Component {

  onSearchSubmit(text){
    console.log(text);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  };
}

export default App;
