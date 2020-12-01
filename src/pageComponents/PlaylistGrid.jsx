import React, { useContext } from 'react';

// components
import Image from 'gatsby-image';
import { Link } from 'gatsby';

// utils
import PlaylistContext from '../context/PlaylistContext';
import useAllSanityPlaylist from '../utils/useAllSanityPlaylist';
import PortableText from '../components/PortableText';

const PlaylistGrid = () => {
  const playlists = useAllSanityPlaylist();

  return (
    <div id={'playlist-grid'} className={'grid-2'}>

      { playlists.map( (playlist, index) => {
        let name = playlist ? playlist.name : 'No Playlist Name';
        let cover = playlist ? playlist.image.asset.fluid : null;
        let description = playlist ? playlist._rawDescription : null;
        let creator = playlist ? playlist.creator : null;
        let spotify_id = playlist ? playlist.spotify_id : null;

        return <PlaylistCard
          key={index}
          name={name}
          cover={cover}
          description={description}
          creator={creator}
          spotify_id={spotify_id}
        />
      })}
    </div>
  );
};

const PlaylistCard = ({name, cover, description, creator, spotify_id}) => {

  const { setPlaylistId } = useContext(PlaylistContext);

  return (
    <div className={'playlist-card'}>
      <Image fluid={cover}/>
      <div className={'playlist-card-body'}>

        <div className={'name'}>
          <p className={'emph'}>{name}</p>
        </div>
              
        <div className={'description'}>
          { description ? (
            <PortableText blocks={description} className={'description'}/>
          ) : (
            <p>A playlist by {creator ? creator.name : `an anonymous creator`}</p>
          )}
        </div>

        <div className={'controls'}>
          { creator && <Link to={`/creators/${creator.slug.current}`}>By {creator.name}</Link> }
          { spotify_id && 
            <button onClick={() => setPlaylistId(spotify_id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
          </button> }
        </div>

      </div>
    </div>
  );
};

export default PlaylistGrid;