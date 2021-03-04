import React from "react"

// components
import PortableText from "../components/PortableText";

// utils
import { graphql } from "gatsby";
import Image from 'gatsby-image';
import PlaylistCard from "../components/PlaylistCard";

export const query = graphql`
  query($slug: String! $id: String!) {

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

    allSanityPlaylist(filter: {creator: {id: {eq: $id}}}) {
      nodes {
        ...PlaylistFragment
      }
    }

  }
`

const Creator = ({data}) => {

  const {sanityCreator, allSanityPlaylist} = data;

  const handleScrollHelperClick = (e) => {
    window.scrollTo({
      top: e.target.parentNode.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={'creator'}>

      <div className={'creator-header'}>
        <div>
          <h3>{sanityCreator.name}</h3>
        </div>
        <Image fluid={{...sanityCreator.profile_image.asset.fluid, aspectRatio: 1/1}}/>

      </div>

      <div className={'scroll-helper'} >
        <button onClick={handleScrollHelperClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"/>
          </svg>
        </button>
      </div>

      <div className={'left'}>

        <section>
          <p className={'section-title emph'}>Creator Bio</p>
          <PortableText blocks={sanityCreator._rawBio}/>
        </section>

        <section>
          <p className={'section-title emph'}>Question For Creator: What is one person, place or thing that has had a significant impact on your creative process, artistic taste, or personal life?</p>
          <PortableText blocks={sanityCreator._rawQuestionForCreator}/>
        </section>

        <section>
          <p className={'section-title emph'}>Creator Information</p>
          { sanityCreator.external_links.map( (link, index) => <a key={index} href={link.link_url}>{link.link_text}</a> )}
        </section>

        <section>
          <p className={'section-title emph'}>Creator Playlists</p>
          { allSanityPlaylist.nodes.map( (playlist, index) => <PlaylistCard key={index} playlist={playlist}/> )}
        </section>

      </div>

      <div className={'right'}>

        <section className={'creator-gallery'}>
          <p className={'section-title emph'}>Creator Gallery</p>

          { sanityCreator.gallery.map( (galleryImage, index) => {
            return <div className={'image-wrapper'} key={index}>
              <Image fluid={galleryImage.asset.fluid}/>
            </div>
          })}

        </section>

      </div>

    </div>
  );
};

export default Creator;