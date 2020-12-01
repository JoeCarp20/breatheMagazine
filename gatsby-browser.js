import React from "react";

// components
import Nav from './src/components/Nav';
import Playlist from './src/components/Playlist';
import PageWrapper from './src/components/PageWrapper';
import Footer from './src/components/Footer';

// utils
import { PlaylistProvider } from "./src/context/PlaylistContext"

const wrapPageElement = ({element}) => (
  <PlaylistProvider>
    <Playlist/>     

    <PageWrapper>
      <Nav/>
      {element}
    </PageWrapper>

    <Footer/>
  </PlaylistProvider>
);

export { wrapPageElement };