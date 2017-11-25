// Import a library to help create a component
// Import destructuring

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component functional function component
const App = () =>
  (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// Render it to the device one component needs to be registered
AppRegistry.registerComponent('albums', () => App);
