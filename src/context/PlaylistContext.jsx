import React, { useState } from 'react';

const PlaylistContext = React.createContext();

const PlaylistProvider = ({children}) => {

    const [playlistId, _setPlaylistId] = useState(null);
    const [loading, setLoading] = useState(false);

    const setPlaylistId = (_playlistId) => {
        if (_playlistId === playlistId) return;
        setLoading(true);
        _setPlaylistId(_playlistId);
    }

    return (
        <PlaylistContext.Provider value={{
            playlistId, 
            setPlaylistId,
            loading,
            setLoading
        }}>
            {children}
        </PlaylistContext.Provider>

    )

};

export default PlaylistContext
export { PlaylistProvider }