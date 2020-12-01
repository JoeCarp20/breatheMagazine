import React from 'react';

// utils
import useAllZineJson from '../utils/useAllZineJson';
import Image from 'gatsby-image';

// styles
import '../styles/pages.scss';

const Zine = () => {

    const zine = useAllZineJson()

    return (
        <div id={'zine'} className={'grid-2'}>
            { zine.map( ( {image}, index ) => (
                <div class={'zine-page'}>
                    <p className={'page-number bold'}>pg. {index + 1}</p>
                    <Image fluid={image.childImageSharp.fluid}/>
                </div>
            ))}
        </div>
    )
}

export default Zine;