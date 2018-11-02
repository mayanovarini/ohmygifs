import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import Footer from './components/Footer';

const API_KEY = 'empEiI33q0BgpZcRYbfF6ZFyDrs2gO3I';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0, // pagination
      query: "", // search term
      giphyData: [], // stores the list of gifs currently being viewed
      cache: {} // stores the cached history of giphy results
    };
  }

  // saves a query based on search term input
  inputChange = e => {
    this.setState({
      query: e.target.value,
      offset: 0
    });
  }

  // calls a helper to fetch Giphy data when Enter is pressed
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._fetchGiphy();
    }
  }

  // a helper to fetch data from Giphy with a query and pagination offset
  // results are cached
  _fetchGiphy() {
    const query = this.state.query;
    const offset = this.state.offset;
    const url = encodeURI(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&offset=${offset}`);
    const hash = `${query} ${offset}`; // e.g. "corgi 0", "corgi 25"

    // if the hash exists in the cache state,
    // then get the result from the cache and assign it to giphyData
    if (hash in this.state.cache) {
      this.setState({
        giphyData: this.state.cache[hash]
      });
      return;
    }

    // otherwise, get the result from Giphy api, save it in the cache,
    // and assign it to giphyData
    fetch(url).then((response) => {
      return response.json()
    }).then(jsonResponse => {
      if(jsonResponse.data) {
        return jsonResponse.data.map(data => ({
          id: data.id,
          imageSrc: data.images.fixed_height.url
        }));
      }
      return {};
    }).then(newData => {
      this.setState({
        giphyData: newData,
        cache: {
          ...this.state.cache,
          [hash]: newData
        }
      });
    });
  }

  // search form submit handler
  searchGiphy = () => {
    this._fetchGiphy();
  }

  // pagination next page handler
  nextGiphy = () => {
    this.setState({
      offset: this.state.offset + 25
    }, () => {
      this._fetchGiphy();
    })

  }

  // pagination previous page handler
  previousGiphy = () => {
    this.setState({
      offset: this.state.offset - 25
    }, () => {
      this._fetchGiphy();
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>OH MY GIFS<img alt="logo" src="/logo.png"/></h1>
        </div>
        <SearchBar
          onChange={this.inputChange}
          searchGiphy={this.searchGiphy}
          onKeyPress={this.handleKeyPress}
        />
      {
        this.state.giphyData.length === 0
          ? <div className="GifHome">
              <img alt="logo" src="https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/source.gif"/>
            </div>
          : <GifList
              giphyData={this.state.giphyData}
              nextGiphy={this.nextGiphy}
              previousGiphy={this.previousGiphy}
              showPrevious={this.state.offset !== 0}
            />
      }
      <Footer
        giphyData={this.state.giphyData}
        query={this.state.query}/>
      </div>
    );
  }
}

export default App;
