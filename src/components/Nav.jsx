import React from 'react';

// styles
import '../styles/components.scss';

// components
import { Link } from 'gatsby'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to={`/store`} className={'emph'}>Store</Link>
            </div>
            <div>
                <Link to={`/creators`} className={'emph'}>Creators</Link>
            </div>
            <div>
                <Link to={`/playlists`} className={'emph'}>Playlists</Link>
            </div>
            <div>
                <Link to={`/concept`} className={'emph'}>Concept</Link>
            </div>
        </nav>
    )
}

export default Nav;