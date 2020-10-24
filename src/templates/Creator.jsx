import React from "react"

// components
import PortableText from "../components/PortableText";

// utils
import { graphql } from "gatsby";
import Image from 'gatsby-image';
import { Link } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    sanityCreator(slug: {current: {eq: $slug}}) {
      id
      name
      profile_image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBio
      gallery {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawQuestionForCreator
      slug {
        current
      }
      external_links {
        link_url
        link_text
        name
      }
    }
  }
`

const Creator = ({data}) => {

  const creator = data.sanityCreator;
  console.log({creator})

  return (
    <div className={'creator'}>

      <div className={'creator-header'}>
        <Image fluid={creator.profile_image.asset.fluid}/>
        <div>
          <h3>{creator.name}</h3>
        </div>
      </div>

      <hr/>
      <PortableText blocks={creator._rawBio}/>

      <hr/>
      <PortableText blocks={creator._rawQuestionForCreator}/>

      <hr/>
      <div className={'creator-gallery'}>
        { creator.gallery.map( (galleryImage, index) => {
          return <Image
            key={index}
            fluid={galleryImage.asset.fluid}
          />
        })}
      </div>

      <hr/>
      <div className={'creator-information'}>
        { creator.external_links.map( (link, index) => <a href={link.link_url}>{link.link_text}</a> )}
      </div>

    </div>
  )

}

export default Creator;