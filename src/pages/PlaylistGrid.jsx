import React, { useContext } from 'react';

// components
import Image from 'gatsby-image';
import { Link } from 'gatsby';

// utils
import PlaylistContext from '../context/PlaylistContext';
import useAllSanityPlaylist from '../utils/useAllSanityPlaylist';
import PortableText from '../components/PortableText';

const PlaylistGrid = () => {
    
    const _playlists = useAllSanityPlaylist();

    const playlistFour = _playlists.find(p => p.name === "Playlist Four")
    const playlists = [
        playlistFour, playlistFour, playlistFour, playlistFour, 
        playlistFour, playlistFour, playlistFour, playlistFour, 
        playlistFour, playlistFour, playlistFour, playlistFour, 
    ]

    return (
        <div id={'playlist-grid'} className={'grid-2'}>

            { playlists.map( (playlist, index) => {

                let name = playlist.name || 'No Playlist Name';
                let cover = playlist.image ? playlist.image.asset.fluid : null;
                let description = playlist._rawDescription;
                let { creator, spotify_id } = playlist;

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
    )

}

const PlaylistCard = ({name, cover, description, creator, spotify_id}) => {

    const { setPlaylistId } = useContext(PlaylistContext);

    return (
        <div className={'playlist-card grid-2'}>

            <div className={'playlist-card-cover'}>
                <Image fluid={cover}/>
                <div className={'cover-overlay'}></div>
            </div>

            <div className={'playlist-card-body'}>
                <p className={'emph'}>{name}</p>

                { description ? (
                    <PortableText blocks={description}/>
                ) : (
                    <p>A playlist by {creator ? creator.name : `an anonymous creator`}</p>
                )}

                <Link to={`/creators/${creator.slug.current}`}>By {creator.name}</Link>

                <p onClick={() => setPlaylistId(spotify_id)}>Play {name}</p>

            </div>


        </div>
    )

}

export default PlaylistGrid;