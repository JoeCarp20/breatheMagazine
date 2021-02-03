const path = require('path');

const getPage = (filename) => {
  return require.resolve( path.join(__dirname, `/src/pageComponents/${filename}`) );
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  createPage({ path: "/", component: getPage("CreatorGrid.jsx") })
  createPage({ path: "/creators/", component: getPage("CreatorGrid.jsx") })
  createPage({ path: "/playlists/", component: getPage("PlaylistGrid.jsx") })
  createPage({ path: "/zine/", component: getPage("Zine.jsx") })
  
  const allCreatorSlugs = await graphql(`
    {
      allSanityCreator {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)

  allCreatorSlugs.data.allSanityCreator.nodes.forEach( node => {

    const {id, slug} = node;

    createPage({
      path: `/creators/${slug.current}/`,
      component: require.resolve("./src/templates/Creator.jsx"),
      context: {
        id,
        slug: slug.current,
      },
    })
  })

}