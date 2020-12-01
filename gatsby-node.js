const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const getPage = (filename) => {
    return require.resolve( path.join(__dirname, `/src/pageComponents/${filename}`) );
  }

  createPage({ path: "/", component: getPage("CreatorGrid.jsx") })
  createPage({ path: "/creators/", component: getPage("CreatorGrid.jsx") })
  createPage({ path: "/playlists/", component: getPage("PlaylistGrid.jsx") })
  createPage({ path: "/zine/", component: getPage("Zine.jsx") })
  
  const allCreatorSlugs = await graphql(`
    {
      allSanityCreator {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  allCreatorSlugs.data.allSanityCreator.nodes.forEach( ({slug}) => {
    createPage({
      path: `/creators/${slug.current}/`,
      component: require.resolve("./src/templates/Creator.jsx"),
      context: {
        slug: slug.current,
      },
    })
  })

}