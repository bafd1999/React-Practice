import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let listStyle = {
  listStyle: 'none'
};

let fakeServerData = {
  user: {
    name: 'Rick',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236}, 
          {name: 'Rosa Helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236}, 
          {name: 'Rosa Helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236}, 
          {name: 'Rosa Helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist - yeah!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236}, 
          {name: 'Rosa Helikopter', duration: 70000}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration / 3600)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)}/> Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => 
            <li style={listStyle}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
  }, 1000);
    
  }

  render() {
    let renderedPlayLists = this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
    ) : []
    return(
      <div className="App">
        
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={renderedPlayLists}/>
          <HoursCounter playlists={renderedPlayLists}/>
          <Filter onTextChange={text => this.setState({filterString: text})}/>
          {renderedPlayLists.map(playlist => 
            <Playlist playlist={playlist}/>
          )}
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
