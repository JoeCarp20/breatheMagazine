import { useStaticQuery } from 'gatsby';

const useAllSanityPlaylist = () => {
  const { allSanityPlaylist } = useStaticQuery(
    graphql`
      query {
        allSanityPlaylist(sort: {order: ASC, fields: name}) {
          nodes {
            ...PlaylistFragment
          }
        }
      }
    `
  );
  
  return allSanityPlaylist.nodes;
}

export default useAllSanityPlaylist;