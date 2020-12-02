import React from 'react';

// styles
import '../styles/components.scss';

const Footer = () => (
    <div id={'footer'}>
        <div className={'footer-column'}>
            <span>
                <a className={'bold'} href="https://www.patreon.com/BreatheMagazine">Support us on Patreon</a>
                <a className={'bold'} href="https://www.instagram.com/breathe.magazine/" target={'_blank'} rel={'noreferrer'}>Follow us on Instagram</a>
            </span>
        </div>

        <div className={'footer-column'}>
            <span>
                <h3>Inhale.</h3>
                <h3>Exhale.</h3>
            </span>
        </div>
        
    </div>
)

export default Footer;