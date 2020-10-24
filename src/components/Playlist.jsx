import React, { useContext, useEffect, useState } from 'react';
import PlaylistContext from '../context/PlaylistContext';

// styles
import '../styles/components.scss'

const Playlist = () => {

    const { playlistId, loading, setLoading } = useContext(PlaylistContext);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => setCollapsed(false), [playlistId]);
    
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

                <div className={'header'} onClick={() => setCollapsed(!collapsed)}>
                    header
                </div>
                
                <iframe
                    src={`https://open.spotify.com/embed/playlist/${playlistId}`}
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    onLoad={() => setLoading(false)}
                ></iframe> 

            </div>

        </div>


    )

}

export default Playlist;