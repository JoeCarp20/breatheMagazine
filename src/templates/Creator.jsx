import React from "react"

// components
import PortableText from "../components/PortableText";

// utils
import { graphql } from "gatsby";
import Image from 'gatsby-image';

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

  return (
    <div className={'creator'}>

      <div className={'creator-header'}>
        <div>
          <h3>{creator.name}</h3>
        </div>
        <Image fluid={creator.profile_image.asset.fluid}/>
      </div>

      <div className={'left'}>

        <section>
          <p className={'section-title emph'}>Creator Bio</p>
          <PortableText blocks={creator._rawBio}/>
        </section>

        <section>
          <p className={'section-title emph'}>Question For Creator: What is one person, place or thing that has had a significant impact on your creative process, artistic taste, or personal life?</p>
          <PortableText blocks={creator._rawQuestionForCreator}/>
        </section>

        <section>
          <p className={'section-title emph'}>Creator Information</p>
          { creator.external_links.map( (link, index) => <a key={index} href={link.link_url}>{link.link_text}</a> )}
        </section>

      </div>

      <div className={'right'}>

        <section className={'creator-gallery'}>
          <p className={'section-title emph'}>Creator Gallery</p>

          { creator.gallery.map( (galleryImage, index) => {
            return <div className={'image-wrapper'}>
              <Image
                key={index}
                fluid={galleryImage.asset.fluid}
              />
            </div>
          })}

        </section>

      </div>

    </div>
  );
};

export default Creator;