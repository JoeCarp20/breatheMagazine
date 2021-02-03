import React, { useContext } from 'react';

// components
import Image from 'gatsby-image';
import { Link } from 'gatsby';

// utils
import PlaylistContext from '../context/PlaylistContext';
import PortableText from './PortableText';


const PlaylistCard = ({playlist}) => {

  const name = playlist ? playlist.name : 'No Playlist Name';
  const cover = playlist ? playlist.image.asset.fluid : null;
  const description = playlist ? playlist._rawDescription : null;
  const creator = playlist ? playlist.creator : null;
  const spotify_id = playlist ? playlist.spotify_id : null;

  const { setPlaylistId } = useContext(PlaylistContext);

  return (
    <div className={'playlist-card'}>
      <Image fluid={{...cover, aspectRatio: 1/1}}/>
      <div className={'playlist-card-body'}>

        <div className={'name'}>
          <p className={'bold'}>{name}</p>
          <Link to={creator ? `/creators/${creator.slug.current}` : ''}>By {creator ? creator.name : 'an anonymous creator' }</Link>
        </div>

        { spotify_id ? (
          <div className={'play-links'}>

            {/* SPOTIFY ICON */}
            <a href={`https://open.spotify.com/playlist/${spotify_id}`} target={"_blank"} rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* PLAY ICON */}
            <button onClick={() => setPlaylistId(spotify_id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
            </button>
          </div>
        ) : (
          <p className={'play-button'}>Cannot play this Playlist</p>
        )}
              
        <div className={'description'}>
          { description ? (
            <PortableText blocks={description} className={'description'}/>
          ) : (
            <p>A playlist by {creator ? creator.name : `an anonymous creator`}</p>
          )}
        </div>



      </div>
    </div>
  );
};

export default PlaylistCard;