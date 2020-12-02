import React, { useContext, useEffect, useState } from 'react';
import PlaylistContext from '../context/PlaylistContext';

// styles
import '../styles/components.scss'

const Playlist = () => {

  const { playlistId, loading, setLoading } = useContext(PlaylistContext);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => setCollapsed(false), [playlistId]);
  const toggleCollapsed = () => setCollapsed(!collapsed);
    
  return (

    <div className={`
        playlist
        ${ (!playlistId) && 'hidden' }
        ${ collapsed && 'collapsed' }
    `}>

      { loading && (
          <div className={'loading-indicator'}>
              <p>loading</p>
          </div>
      )}

      <div>

        <button className={'header'} onClick={toggleCollapsed}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>
        </button>
      
        { playlistId && playlistId !== '' &&
          <iframe
              title={'Current Playlist'}
              src={`https://open.spotify.com/embed/playlist/${playlistId}`}
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              onLoad={() => setLoading(false)}
              role={'contentinfo'}
          >
            <p>Cannot play this playlist</p>    
          </iframe> 
        }

      </div>
    </div>
  )
}

export default Playlist;