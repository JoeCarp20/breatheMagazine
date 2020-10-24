exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  createPage({
    path: "/success/",
    component: require.resolve("./src/pages/ProductGrid.jsx"),
  })

  createPage({
    path: "/cancel/",
    component: require.resolve("./src/pages/ProductGrid.jsx"),
  })

  createPage({
    path: "/creators/",
    component: require.resolve("./src/pages/CreatorGrid.jsx"),
  })

  createPage({
    path: "/playlists/",
    component: require.resolve("./src/pages/PlaylistGrid.jsx"),
  })

  createPage({
    path: "/store/",
    component: require.resolve("./src/pages/ProductGrid.jsx"),
  })
  
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