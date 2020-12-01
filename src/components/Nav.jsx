import React from 'react';

// styles
import '../styles/components.scss';

// components
import { Link } from 'gatsby'

const Nav = () => (
  <nav>

    <div className={'row'}>
      <div className={'nav-item'}>
        <Link to={`/creators`} className={'emph'}>Creators</Link>
      </div>
      <div className={'nav-item'}>
        <Link to={`/playlists`} className={'emph'}>Playlists</Link>
      </div>
      <div className={'nav-item'}>
        <Link to={`/zine`} className={'emph'}>Zine</Link>
      </div>
      <div className={'nav-item'}>
        <a 
          href={`https://breathe-mag.myshopify.com/`} 
          className={'emph'} 
          target={'_blank'} 
          rel="noreferrer"
        >Store</a>
      </div>
    </div>

    <div className={'row'}>
      <div className={'subtitle'}>
        <p className={'emph'}>INHALE. EXHALE.</p>
      </div>
    </div>
    
  </nav>
);

export default Nav;