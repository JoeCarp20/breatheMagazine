import React from 'react';

// components
import Image from 'gatsby-image';
import { Link } from 'gatsby';

// utils
import useAllSanityCreator from '../utils/useAllSanityCreator';

// styles
import '../styles/pages.scss'

const CreatorGrid = () => {

    const allSanityCreator = useAllSanityCreator();

    const creators = [
        ...allSanityCreator, ...allSanityCreator, ...allSanityCreator,
        ...allSanityCreator, ...allSanityCreator, ...allSanityCreator,
        ...allSanityCreator, ...allSanityCreator, ...allSanityCreator,
    ]

    return (
        <div id={'creator-grid'} className={'grid-4'}>

            { creators.map( (creator, index) => {
                return <CreatorCard 
                    key={index}
                    slug={creator.slug.current}
                    name={creator.name}
                    profileImage={creator.profile_image.asset.fluid}
                />
            })}

        </div>
    )

}

const CreatorCard = ({slug, name, profileImage}) => {

    return (
        <div className={'creator-card'}>
            <Link to={`/creators/${slug}`}>
                <Image fluid={profileImage}/>
                <p className={'emph'}>{name}</p>
            </Link>
        </div>
    )

}

export default CreatorGrid;