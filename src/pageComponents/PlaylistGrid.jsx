import React from 'react';

// components
import PlaylistCard from '../components/PlaylistCard';

// utils
import useAllSanityPlaylist from '../utils/useAllSanityPlaylist';

const PlaylistGrid = () => {
  const playlists = useAllSanityPlaylist();

  return (
    <div id={'playlist-grid'} className={'grid-2'}>
      { playlists.map( (playlist, index) => <PlaylistCard key={index} playlist={playlist}/> )}
    </div>
  );
};

export default PlaylistGrid;