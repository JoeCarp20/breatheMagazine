import React from 'react';

// utils
import useAllZineJson from '../utils/useAllZineJson';
import Image from 'gatsby-image';

// styles
import '../styles/pages.scss';

const Zine = () => {

    const zine = useAllZineJson()

    console.log({zine})

    return (
        <div id={'zine'}>
            { zine.map( ({image}) => <Image fluid={image.childImageSharp.fluid}/>)}
        </div>
    )
}

export default Zine;