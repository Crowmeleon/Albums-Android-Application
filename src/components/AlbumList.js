import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class Based Function allowing for Dynamic Rendering, they have life cycle methods
class AlbumList extends Component {

  /* this is the state which allows for data to be dynamic,
  this is a plain javascrip object that is available to record
   and respond to user-triggered events */

  state = { albums: [] };

  componentWillMount() {
    // this will use the default fetch method provided by es6 we are using a promise to use
      console.log('Component Will Mount an Album List');
      /* eslint-disable */

      fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseData => {

        // this allows for you to be able to change the state data and re-render this specific component
        this.setState({
          albums: responseData
        })
      });

      /* eslint-enable */
  }

  renderAlbums() {
    /* remember in es6 using an arrow function you
    don't need to use a return nor {} when its just a single line of code */
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />);
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
