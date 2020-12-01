import React from "react";

// components
import Nav from './src/components/Nav';
import Playlist from './src/components/Playlist';

// utils
import { PlaylistProvider } from "./src/context/PlaylistContext"

const wrapPageElement = ({element}) => (
  <PlaylistProvider>
    <Playlist/>     
    <Nav/>
    {element}
  </PlaylistProvider>
);

export { wrapPageElement };